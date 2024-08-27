import type { BasaltLogger } from '@basalt-lab/basalt-logger';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import type { Hook } from '@/common/types';

/**
 * Logger Hook class implement the IHook interface ({@link Hook})
 */
export class LoggerHook implements Hook {

    /**
     * Instance of BasaltLogger allowing to log messages in one or more strategies. ({@link BasaltLogger})
     */
    private readonly _basaltLogger: BasaltLogger | undefined;

    /**
     * Constructor of the LoggerHook class.
     *
     * @param basaltLogger - Instance of BasaltLogger allowing to log messages in one or more strategies. ({@link BasaltLogger})
     */
    public constructor(basaltLogger: BasaltLogger | undefined) {
        this._basaltLogger = basaltLogger;
    }

    /**
     * Configure the hook
     *
     * @param app - The Fastify instance. ({@link FastifyInstance})
     */
    public configure(app: FastifyInstance): void {
        app.addHook('onSend', (request: FastifyRequest, reply: FastifyReply, payload, done) => {
            this._basaltLogger?.info({
                requestId: request.id,
                hostname: request.hostname,
                ip: request.ip,
                ips: request.ips,
                method: request.method,
                url: request.url,
                statusCode: reply.statusCode,
                createdAt: new Date(),
            });
            done(null, payload);
        });
    }

}