import type { Redis } from 'ioredis';

import { InfrastructureErrorKeys } from '@/Common/Error/Enum/index.js';
import { AndesiteError } from '@/Common/Error/index.js';
import { DragonFlyCreator, type AbstractStoreCreator, type IDragonFlyStoreOptions } from './Creator/index.js';

/**
 * FactoryStoreSingleton class. (Singleton)
 */
class FactoryStoreSingleton {
    /**
     * Singleton instance of the FactoryStore class. ({@link FactoryStoreSingleton})
     */
    private static _instance: FactoryStoreSingleton;

    /**
     * Map of store. Key is the name of the store and value is the ({@link AbstractStoreCreator}) with the store schema types.
     */
    private readonly _store: Map<string, AbstractStoreCreator>;

    /**
     * Private constructor of the FactoryStore class.
     */
    private constructor() {
        this._store = new Map();
    }

    /**
     * Constructor of the FactoryStore class.
     *
     * @returns A new instance of the FactoryStore class. ({@link FactoryStoreSingleton})
     */
    public static get instance(): FactoryStoreSingleton {
        if (!FactoryStoreSingleton._instance)
            FactoryStoreSingleton._instance = new FactoryStoreSingleton();
        return FactoryStoreSingleton._instance;
    }

    /**
     * Register a new store.
     *
     * @param name - The name of the store
     * @param type - The type of the store (ex: redis)
     * @param options - The options of the store. ({@link IDragonFlyStoreOptions})
     *
     * @throws ({@link AndesiteError}) - If the store is already registered with the same name. ({@link InfrastructureErrorKeys.STORE_ALREADY_REGISTERED})
     * @throws ({@link AndesiteError}) - If the store type is invalid. ({@link InfrastructureErrorKeys.STORE_INVALID_TYPE})
     */
    public register(
        name: string,
        type: 'redis',
        options: IDragonFlyStoreOptions
    ): void {
        if (this._store.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureErrorKeys.STORE_ALREADY_REGISTERED,
                detail: { name }
            });
        let creator: AbstractStoreCreator | undefined = undefined;
        if (type === 'redis')
            creator = new DragonFlyCreator(options);
        if (!creator)
            throw new AndesiteError({
                messageKey: InfrastructureErrorKeys.STORE_INVALID_TYPE,
                detail: { type }
            });
        this._store.set(name, creator);
        creator.connect();
        const { log } = options;
        if (log)
            log.info(`Store ${name} initialized`);
    }

    /**
     * Unregister a store.
     *
     * @param name - The name of the store
     *
     * @throws ({@link AndesiteError}) - If the store is not registered. ({@link InfrastructureErrorKeys.STORE_NOT_REGISTERED})
     */
    public unregister(name: string): void {
        if (!this._store.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureErrorKeys.STORE_NOT_REGISTERED,
                detail: { name }
            });
        const store: AbstractStoreCreator = this._store.get(name) as AbstractStoreCreator;
        if (store.isConnected())
            store.disconnect();
        this._store.delete(name);
    }

    /**
     * Get a store by name.
     *
     * @param name - The name of the store
     *
     * @throws ({@link AndesiteError}) - If the store is not registered. ({@link InfrastructureErrorKeys.STORE_NOT_REGISTERED})
     *
     * @returns The store. ({@link Redis})
     */
    public get(name: string): Redis {
        if (!this._store.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureErrorKeys.STORE_NOT_REGISTERED,
                detail: { name }
            });
        const store: AbstractStoreCreator = this._store.get(name) as AbstractStoreCreator;
        return store.store;
    }

    /**
     * Get the list of store names.
     *
     * @returns The list of store names.
     */
    public get registry(): string[] {
        return Array.from(this._store.keys());
    }
}

/**
 * FactoryStore is a singleton instance of the FactoryStoreSingleton class. ({@link FactoryStoreSingleton})
 */
export const FactoryStore = FactoryStoreSingleton.instance;
