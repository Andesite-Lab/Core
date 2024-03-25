import i18next from 'i18next';

import { I18n } from '../../../Source/Common/Tools';
import { ErrorCommon, ErrorCommonCode } from '../../../Source//Common/Errors';

describe('I18n', () => {
    

    describe('initI18n', () => {
        it('should initialize i18n and translate', async () => {
            const resources = {
                en: {
                    translation: {
                        test: 'Test',
                    },
                },
            };
            await I18n.initI18n(resources);
            expect(I18n.translate('test', 'en')).toBe('Test');
        });
        
        it('should throw an error if initialization fails', async () => {
            const resources = {
                en: {
                    translation: {
                        test: 'Test',
                    },
                },
            };
            
            const mockInit = jest.fn().mockRejectedValue(new Error('Échec de l’initialisation'));
            i18next.init = mockInit;
            
            await expect(I18n.initI18n(resources))
                .rejects
                .toBeInstanceOf(ErrorCommon);
            
            await expect(I18n.initI18n(resources))
                .rejects
                .toHaveProperty('code', ErrorCommonCode.I18N_INIT_FAILED);
        });

    });
});