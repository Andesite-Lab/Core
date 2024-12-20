import { type TSchema, Type } from '@sinclair/typebox';

/**
 * Generates the schema of the default 200 response
 *
 * @param contentSchema - (optional) - The schema of the content to be returned in the response ({@link JSONSchema})
 *
 * @returns The schema of the default 200 response ({@link JSONSchema})
 */
export function default200ResponseSchema(
    contentSchema?: TSchema
): TSchema {
    return Type.Object({
        statusCode: Type.Number(),
        message: Type.String(),
        ...(contentSchema ? { content: contentSchema } : {})
    });
}
