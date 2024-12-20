import type { BasaltLogger } from '@basalt-lab/basalt-logger';
import type { Static, TSchema } from '@sinclair/typebox/type';
import ajvError from 'ajv-errors';
import ajvFormats from 'ajv-formats';
import { parse } from 'fast-querystring';
import fastify from 'fastify';
import type { FastifyInstance } from 'fastify/types/instance.js';
import type { FastifyBaseLogger } from 'fastify/types/logger.js';
import type { FastifyTypeProvider } from 'fastify/types/type-provider.js';
import type { IncomingMessage, Server, ServerResponse } from 'http';

import type { Hook } from '#/common/type/data/presentation/http/hook.data.ts';
import type { Plugin } from '#/common/type/data/presentation/http/plugin.data.ts';
import { LanguageHook } from './hook/language.hook.ts';
import { LoggerHook } from './hook/logger.hook.ts';
import { QueryParseHook } from './hook/queryParse.hook.ts';
import type { AbstractRouter } from './router/abstract.router.ts';

/**
 * Interface is responsible for defining the options for starting the server.
 */
export interface StartOptions {
    /**
     * The port number for the server.
     */
    port: number;

    /**
     * The host for the server.
     */
    host: string;
}

/**
 * Interface is responsible for defining the options for the server.
 */
export interface ServerOptions {

    /**
     * The base URL of the server. (Default: '/')
     */
    baseUrl: string;

    /**
     * Instance of BasaltLogger allowing to log messages in one or more strategies. ({@link BasaltLogger})
     */
    logger: BasaltLogger | undefined;
}

/**
 * TypeBoxProvider interface allows to infer the schema, validator and serializer from the TypeBox schema provided.
 * Extends the FastifyTypeProvider interface. ({@link FastifyTypeProvider})
 */
export interface TypeBoxProvider extends FastifyTypeProvider {
    /**
     * Validator schema is the schema used to validate the request.
     */
    validator: this['schema'] extends TSchema
        ? Static<this['schema']>
        : unknown
    /**
     * Serializer schema is the schema used to serialize the response.
     */
    serializer: this['schema'] extends TSchema
        ? Static<this['schema']>
        : unknown
}


/**
 * FastifyInstanceWithSchema type is a Fastify instance with schema.
 */
export type FastifyInstanceWithSchema = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyBaseLogger, TypeBoxProvider>;

/**
 * ServerManager class is responsible for managing the Fastify server instance. (Singleton Pattern)
 */
export class ServerManager {
    /**
     * The Fastify instance. ({@link FastifyInstanceWithSchema})
     */
    private readonly _app: FastifyInstanceWithSchema;

    /**
     * The logger instance. ({@link BasaltLogger})
     */
    private readonly _logger: BasaltLogger | undefined;

    /**
     * The base URL of the server. (Default: '/')
     */
    private readonly _baseUrl: string;

    /**
     * Constructor of the ServerManager class.
     *
     * @param options - The options for the server. ({@link ServerOptions})
     */
    public constructor(options?: Partial<ServerOptions>) {
        this._logger = options?.logger;
        this._baseUrl = options?.baseUrl || '/';
        this._app = fastify({
            querystringParser: (str) => parse(str),
            requestTimeout: 120000,
            trustProxy: true,
            logger: false,
            ignoreTrailingSlash: true,
            ignoreDuplicateSlashes: true,
            disableRequestLogging: true,
            ajv: {
                customOptions: {
                    $data: true,
                    removeAdditional: false,
                    allowUnionTypes: true,
                    coerceTypes: true,
                    allErrors: true,
                    parseDate: true,
                    allowDate: true,
                    strict: true,
                    strictTypes: true,
                    strictTuples: true,
                    strictNumbers: true,
                    strictRequired: true,
                    strictSchema: true,
                    code: {
                        optimize: true,
                        esm: true
                    }
                },
                plugins: [
                    ajvError.default,
                    ajvFormats.default
                ]
            }
        }).withTypeProvider<TypeBoxProvider>();
        this._addDefaultHooks();
    }

    /**
     * Get the Fastify instance.
     *
     * @returns The Fastify instance. ({@link FastifyInstanceWithSchema})
     */
    public get app(): FastifyInstanceWithSchema {
        return this._app;
    }

    /**
     * Start the server.
     *
     * @param startOptions - The options for starting the server. ({@link StartOptions})
     */
    public async start(startOptions?: Partial<StartOptions>): Promise<void> {
        await this._app.ready();
        await this._app.listen({
            port: (startOptions?.port) || 3000,
            host: (startOptions?.host) || '0.0.0.0'
        });
        if (this._logger)
            this._logger.info(`Server listening on ${(startOptions?.host) || '0.0.0.0'}:${(startOptions?.port) || 3000}`);
    }

    /**
     * Close the server.
     */
    public async close(): Promise<void> {
        await this._app.close();
    }

    /**
     * Add router to the Fastify instance.
     *
     * @param router - The router to add. ({@link AbstractRouter})
     */
    public async addRouter(router: AbstractRouter): Promise<void> {
        await router.configure(this._app, this._baseUrl);
    }

    /**
     * Add routers to the Fastify instance.
     *
     * @param routers - The routers to add. ({@link AbstractRouter})
     */
    public async addRouters(routers: AbstractRouter[]): Promise<void> {
        await Promise.all(routers.map((router) => router.configure(this._app, this._baseUrl)));
    }

    // //////////////////////////////////////////////:
    // //////////////////////////////////////////////:
    // /////////// 🚧 EN CONSTRUCTION 🚧 ////////////:
    // //////////////////////////////////////////////:
    // //////////////////////////////////////////////:

    /**
     * Add hook to the Fastify instance.
     *
     * @param Hook - The hook to add. ({@link Hook})
     */
    public async addHook(hook: Hook): Promise<void> {
        await hook.configure(this._app);
    }

    /**
     * Add hooks to the Fastify instance.
     *
     * @param hooks - The hooks to add. ({@link Hook})
     */
    public async addHooks(hooks: Hook[]): Promise<void> {
        await Promise.all(hooks.map((hook) => hook.configure(this._app)));
    }

    /**
     * Add plugin to the Fastify instance.
     *
     * @param plugin - The plugin to add. ({@link Plugin})
     */
    public async addPlugin(plugin: Plugin): Promise<void> {
        await plugin.configure(this._app, this._baseUrl);
    }

    /**
     * Add plugins to the Fastify instance.
     *
     * @param plugins - The plugins to add. ({@link Plugin})
     */
    public async addPlugins(plugins: Plugin[]): Promise<void> {
        await Promise.all(plugins.map((plugin) => plugin.configure(this._app, this._baseUrl)));
    }

    /**
     * Add default hooks to the Fastify instance.
     */
    private _addDefaultHooks(): void {
        if (this._logger)
            (new LoggerHook(this._logger)).configure(this._app);
        (new LanguageHook()).configure(this._app);
        (new QueryParseHook()).configure(this._app);
    }
}