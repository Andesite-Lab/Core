import { createInstance, type Resource, type i18n } from 'i18next';

import { ErrorCommon, ErrorCommonCode } from '@/Common/Errors';

// /**
//  * Initializes i18n with the provided resources.
//  * @param resources - The resources to initialize i18n with
//  * @throws {@link ErrorCommon} with code {@link ErrorCommonCode.I18N_INIT_FAILED} if initialization fails
//  */
// async function initI18n(
//     resources: Readonly<Resource>,
//     fallbackLng: string = 'en'
// ): Promise<void> {
//     try {
//         await i18next.init({
//             lng: 'en',
//             resources,
//             fallbackLng,
//             interpolation: {
//                 escapeValue: false,
//             }
//         });
//     } catch (error) {
//         throw new ErrorCommon(ErrorCommonCode.I18N_INIT_FAILED, error);
//     }
// }

// /**
//  * Type for key-value pairs used for interpolation in translations.
//  */
// export type Interpolation = Record<string, unknown>

// /**
//  * Retrieves a translation for the given code in the specified language.
//  * @param code - The code of the translation to get
//  * @param lang - The language to get the translation in
//  * @param interpolation - The interpolation is Key-value pairs for dynamic values in the translation string (optional)
//  * @throws {@link ErrorCommon} with code {@link ErrorCommonCode.I18N_NOT_INITIALIZED} if i18n is not initialized
//  * @returns The translation for the given code in the specified language
//  */
// function translate(code: string, lang: string, interpolation?: Interpolation): string {
//     return i18next.t(code, { lng: lang, ...interpolation });
// }

// export const I18n = {
//     initI18n,
//     translate,
// };

/**
 * Type for key-value pairs used for interpolation in translations.
 */
export type Interpolation = Record<string, unknown>

export class I18n {
    /**
     * The i18n instance. Undefined if not initialized.
     */
    private _i18n: i18n | undefined;

    /**
     * Initializes i18n with the provided resources.
     * @param resources - The resources to initialize i18n with. The keys are the language codes and the values are the translations.
     * @param fallbackLng - The fallback language to use if the requested language is not available. (default: 'en')
     * 
     * @throws {@link ErrorCommon} with code {@link ErrorCommonCode.I18N_IS_ALREADY_INITIALIZED} if i18n is already initialized
     * 
     * @example
     * ```typescript
     * const resources = {
     *    en: {
     *       translation: {
     *         test: 'Test',
     *      },
     *   },
     * };
     * I18n.initI18n(resources);
     * ```
     */
    public initI18n(resources: Readonly<Resource>, fallbackLng: string = 'en'): void {
        if (this._i18n)
            throw new ErrorCommon(ErrorCommonCode.I18N_IS_ALREADY_INITIALIZED);
        this._i18n = createInstance({
            lng: 'en',
            fallbackLng,
            interpolation: {
                escapeValue: false,
            },
            resources,
        });
    }

    /**
     * Resets the i18n instance.
     * 
     * @throws {@link ErrorCommon} with code {@link ErrorCommonCode.I18N_NOT_INITIALIZED} if i18n is not initialized
     */
    public resetI18n(): void {
        if (!this._i18n)
            throw new ErrorCommon(ErrorCommonCode.I18N_NOT_INITIALIZED);
        this._i18n = undefined;
    }


    /**
     * 
     * @param key - 
     * @param language 
     * @param interpolation 
     * @returns 
     */
    public translate(key: string, language: string = 'en', interpolation: Interpolation = {}): string {
        if (!this._i18n)
            throw new ErrorCommon(ErrorCommonCode.I18N_NOT_INITIALIZED);
        return this._i18n.t(key, { lng: language, ...interpolation });
    }
}


