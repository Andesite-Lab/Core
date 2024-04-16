import i18next, { type Resource, type i18n } from 'i18next';
import { ErrorCommon, ErrorCommonCode } from '@/Common/Errors';

/**
 * An object containing the values to interpolate into the translated string.
 */
export type Interpolation = Record<string, unknown>;

let _i18n: i18n | undefined = undefined;

/**
 * Initialize i18n with the given resources and fallback language.
 * 
 * @param resources - The resources to use for i18n.
 * @param fallbackLng - The fallback language to use if the requested language is not available.
 * 
 * @throws {@link ErrorCommon} - If i18n is already initialized. {@link ErrorCommonCode.I18N_IS_ALREADY_INITIALIZED}
 */
async function initI18n(resources: Readonly<Resource>, fallbackLng: string = 'en'): Promise<void> {
    if (_i18n && _i18n.isInitialized) 
        throw new ErrorCommon(ErrorCommonCode.I18N_IS_ALREADY_INITIALIZED);

    _i18n = i18next.createInstance();
    await _i18n.init({
        lng: 'en',
        fallbackLng,
        interpolation: {
            escapeValue: false,
        },
        resources,
    });
}

/**
 * Check if i18n is initialized.
 * @returns Whether i18n is initialized.
 */
function isI18nInitialized(): boolean {
    return _i18n !== undefined && _i18n.isInitialized;
}

/**
 * Reset i18n to its initial state.
 * 
 * @throws {@link ErrorCommon} - If i18n is not initialized. {@link ErrorCommonCode.I18N_NOT_INITIALIZED}
 */
function resetI18n(): void {
    if (!(_i18n && _i18n.isInitialized))
        throw new ErrorCommon(ErrorCommonCode.I18N_NOT_INITIALIZED);
    _i18n = undefined;
}

/**
 * Translate the given key to the given language. If the language is not provided, 'en' is used.
 * @param key - The key to translate.
 * @param language - The language to translate to. Defaults to 'en'.
 * @param interpolation - The interpolation values to use. Defaults to an empty object.
 * 
 * @throws {@link ErrorCommon} - If i18n is not initialized. {@link ErrorCommonCode.I18N_NOT_INITIALIZED}
 * 
 * @returns The translated string.
 */
function translate(key: string, language: string = 'en', interpolation: Interpolation = {}): string {
    if (!(_i18n && _i18n.isInitialized))
        throw new ErrorCommon(ErrorCommonCode.I18N_NOT_INITIALIZED);

    return _i18n.t(key, {
        lng: language,
        ...interpolation
    });
}

export const I18n = {
    isI18nInitialized,
    initI18n,
    resetI18n,
    translate,
};