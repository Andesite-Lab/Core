import type { TSchema } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

import { CoreError } from '#/common/error/core.error.ts';
import { ErrorKeys } from '#/common/error/keys.error.ts';

/**
 * Validate the environment variables based on the schema provided.
 *
 * @param schema - The schema to validate the environment variables ({@link TSchema})
 *
 * @throws ({@link CoreError}) - If the environment variables are invalid based on the schema. ({@link ErrorKeys.INVALID_ENVIRONMENT})
 */
export function validateEnv(schema: TSchema): void {
    const errors = [...Value.Errors(schema, process.env)];
    if (errors.length === 0) return;
    throw new CoreError({
        messageKey: ErrorKeys.INVALID_ENVIRONMENT,
        detail: errors
    });
}
