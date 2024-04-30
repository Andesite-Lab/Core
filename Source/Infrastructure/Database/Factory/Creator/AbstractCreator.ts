import { BasaltLogger } from '@basalt-lab/basalt-logger';
import {
    DeduplicateJoinsPlugin,
    Kysely,
    type Dialect,
    type ErrorLogEvent,
    type QueryLogEvent
} from 'kysely';

import { AndesiteError } from '@/Common/Error';
import { InfrastructureDatabaseKeys } from '@/Common/Error/Enum';

/**
 * Abstract class for Database Creator
 * 
 * @typeparam T - The database types
 */
export abstract class AbstractCreator<T> {
    /**
     * The database connection object
     */
    private _database: Kysely<T> | undefined;
    /**
     * The dialect of the database
     */
    private readonly _dialect: Dialect;
    /**
     * Activate the log
     */
    private readonly _log: boolean;

    /**
     * Constructor of the AbstractCreator class
     * @param dialect - The {@link Dialect} of the database (ex: PostgresDialect, MySQLDialect ...) 
     * @param log - Activate the log (default: false)
     */
    protected constructor(dialect: Readonly<Dialect>, log: boolean = false) {
        this._dialect = dialect;
        this._log = log;
    }

    /**
     * Connect to the database
     */
    public connection(): void {
        this._database = new Kysely<T>({
            dialect: this._dialect,
            log: (event: QueryLogEvent | ErrorLogEvent): void => {
                if (!this._log)
                    return;
                if (event.level === 'query')
                    BasaltLogger.info(event);
                else 
                    BasaltLogger.error(event);
            },
            plugins: [new DeduplicateJoinsPlugin()]
        });
    }

    /**
     * Disconnect from the database
     */
    public async disconnection(): Promise<void> {
        await this._database?.destroy();
    }

    /**
     * Get the database connection object
     * 
     * @returns The database connection object. ({@link Kysely})
     */
    public get database(): Kysely<T> {
        if (!this._database)
            throw new AndesiteError({
                messageKey: InfrastructureDatabaseKeys.DATABASE_NOT_CONNECTED,
            });
        return this._database;
    }
}