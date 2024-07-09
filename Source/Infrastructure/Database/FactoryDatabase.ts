import type { Knex } from 'knex';

import { InfrastructureDatabaseKeys } from '@/Common/Error/Enum/index.js';
import { AndesiteError } from '@/Common/Error/index.js';
import {
    BetterSQLiteCreator,
    MSSQLCreator,
    PostgresCreator,
    type AbstractCreator,
    type IBetterSQLiteDatabaseOptions,
    type IMSSQLDatabaseOptions,
    type IPostgresDatabaseOptions
} from '@/Infrastructure/Database/Creator/index.js';

/**
 * FactoryDatabase class.
 */
export class FactoryDatabase {
    /**
     * Singleton instance of the FactoryDatabase class. ({@link FactoryDatabase})
     */
    private static _instance: FactoryDatabase;

    /**
     * Map of database. Key is the name of the database and value is the ({@link AbstractCreator}) with the database schema types.
     */
    private readonly _database: Map<string, unknown>;

    /**
     * Private constructor of the FactoryDatabase class.
     */
    private constructor() {
        this._database = new Map();
    }

    /**
     * Constructor of the FactoryDatabase class.
     *
     * @returns A new instance of the FactoryDatabase class. ({@link FactoryDatabase})
     */
    public static get instance(): FactoryDatabase {
        if (!this._instance)
            this._instance = new FactoryDatabase();
        return this._instance;
    }

    /**
     * Register a new database.
     *
     * @param name - The name of the database
     * @param type - The type of the database (ex: postgres, better-sqlite, mssql)
     * @param options - The options of the database. ({@link IPostgresDatabaseOptions} or {@link IBetterSQLiteDatabaseOptions} or {@link IMSSQLDatabaseOptions})
     *
     * @throws ({@link AndesiteError}) - If the database is already registered with the same name. ({@link InfrastructureDatabaseKeys.DATABASE_ALREADY_REGISTERED})
     * @throws ({@link AndesiteError}) - If the database is not connected ({@link InfrastructureDatabaseKeys.DATABASE_NOT_CONNECTED})
     */
    public async register(
        name: string,
        type: 'postgres' | 'better-sqlite' | 'mssql',
        options: IPostgresDatabaseOptions | IBetterSQLiteDatabaseOptions | IMSSQLDatabaseOptions
    ): Promise<void> {
        if (this._database.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureDatabaseKeys.DATABASE_ALREADY_REGISTERED,
                detail: { name }
            });
        let creator: AbstractCreator | undefined = undefined;
        if (type === 'postgres')
            creator = new PostgresCreator(options as IPostgresDatabaseOptions);
        else if (type === 'better-sqlite')
            creator = new BetterSQLiteCreator(options as IBetterSQLiteDatabaseOptions);
        else if (type === 'mssql')
            creator = new MSSQLCreator(options as IMSSQLDatabaseOptions);
        if (creator) {
            this._database.set(name, creator);
            await creator.connection();
        }
    }

    /**
     * Unregister a database by name.
     *
     * @param name - The name of the database to unregister
     *
     * @throws ({@link AndesiteError}) - If the database is not registered with the same name. ({@link InfrastructureDatabaseKeys.DATABASE_ALREADY_NOT_REGISTERED})
     */
    public async unregister(name: string): Promise<void> {
        if (!this._database.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureDatabaseKeys.DATABASE_ALREADY_NOT_REGISTERED,
                detail: { name }
            });
        const database: AbstractCreator = this._database.get(name) as AbstractCreator;
        if (await database.isConnected())
            await database.disconnection();
        this._database.delete(name);
    }

    /**
     * Get a database by name.
     *
     * @param name - The name of the database to get
     *
     * @throws ({@link AndesiteError}) - If the database is not registered with the same name. ({@link InfrastructureDatabaseKeys.DATABASE_NOT_REGISTERED})
     *
     * @returns The ({@link Knex}) instance
     */
    public get(name: string): Knex {
        if (!this._database.has(name))
            throw new AndesiteError({
                messageKey: InfrastructureDatabaseKeys.DATABASE_NOT_REGISTERED,
                detail: { name }
            });
        const database: AbstractCreator = this._database.get(name) as AbstractCreator;
        return database.database;
    }

    /**
     * Get the list of registered databases.
     */
    public get registry(): string[] {
        return Array.from(this._database.keys());
    }
}
