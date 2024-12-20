import helmet from '@fastify/helmet';
import type { FastifyInstance } from 'fastify/types/instance.js';

import type { Plugin } from '#/common/type/data/presentation/http/plugin.data.ts';

/**
 * The HelmetPlugin plugin implement the IPlugin interface ({@link Plugin})
 */
export class HelmetPlugin implements Plugin {
    /**
     * Configures the HelmetPlugin.
     *
     * @param app - The Fastify instance. ({@link FastifyInstance})
     */
    public async configure(app: FastifyInstance): Promise<void> {
        await app.register(helmet);
    }
}
