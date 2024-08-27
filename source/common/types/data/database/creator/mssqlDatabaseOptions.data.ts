import type { BasaltLogger } from '@basalt-lab/basalt-logger';

/**
 * Options for the MSSQL Database
 */
export interface MSSQLDatabaseOptions {
    /**
     * Database Name
     */
    databaseName: string;
    /**
     * The server of the database
     */
    host: string;
    /**
     * The port of the database
     */
    port: number;
    /**
     * The user of the database
     */
    user: string;
    /**
     * The password of the database
     */
    password: string;
    /**
     * Active encryption
     * default: true
     */
    encrypt?: boolean;
    /**
     * The minimum pool size of the database
     */
    poolMin?: number;
    /**
     * The maximum pool size of the database
     */
    poolMax?: number;
    /**
     * Instance of BasaltLogger allowing to log messages in one or more strategies. ({@link BasaltLogger})
     */
    log?: BasaltLogger;
}
