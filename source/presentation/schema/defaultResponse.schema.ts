import { S, type JSONSchema } from '#/common/lib/required/fluent-json-schema/fluent.lib.ts';
import { I18n } from '#/common/util/i18n.util.ts';

/**
 * Generates the schema of the default 200 response
 *
 * @param message - The message to be displayed in the response
 * @param interpolation - The interpolation to be used in the message
 * @param contentSchema - (optional) - The schema of the content to be returned in the response ({@link JSONSchema})
 *
 * @returns The schema of the default 200 response ({@link JSONSchema})
 */
export function default200ResponseSchema(
    message: string,
    interpolation?: Record<string, unknown>,
    contentSchema?: JSONSchema
): JSONSchema {
    let response = S.object()
        .prop('statusCode', S.number())
        .examples([200])
        .prop('message', S.string())
        .examples([((): string => {
            if (message)
                return I18n.isI18nInitialized() ? I18n.translate(message, 'en', interpolation) : '';
            return '';
        })()]);
    if (contentSchema)
        response = response.prop('content', contentSchema);
    return response;
}
