import formBody from '@fastify/formbody';
import { parse } from 'fast-querystring';

import type { FastifyInstance } from '#/common/lib/required/fastify/fastify.lib.ts';
import type { Plugin } from '#/common/type/data/presentation/http/plugin.data.ts';

/**
 * The options for the FormBody.
 */
export interface FormBodyOptions {
    /**
     * The body limit for the FormBody. (default: 1048576)
     */
    bodyLimit?: number;
}

/**
 * The FormBody plugin implement the Plugin interface ({@link Plugin})
 */
export class FormBodyPlugin implements Plugin {
    /**
     * The options for the FormBody. ({@link FormBodyOptions})
     */
    private readonly _options: FormBodyOptions | undefined;

    /**
     * Constructor of the FormBodyPlugin.
     *
     * @param options - The options for the FormBody. ({@link FormBodyOptions})
     */
    public constructor(options?: FormBodyOptions) {
        this._options = options;
    }

    /**
     * Configures the FormBody.
     *
     * @param app - The Fastify instance. ({@link FastifyInstance})
     */
    public async configure(app: FastifyInstance): Promise<void> {
        await app.register(formBody, {
            parser: (str) => parse(str),
            bodyLimit: this._options?.bodyLimit ?? 1048576
        });
    }
}
