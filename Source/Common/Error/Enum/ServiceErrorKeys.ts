/**
 * ServiceErrorKeys is an enum that contains the error codes for the Service layer
 */
export enum ServiceErrorKeys {
    ERROR_PACKAGE_JSON_EXISTS = 'error.domain.service.error_package_json_exists',
    ERROR_TS_CONFIG_EXISTS = 'error.domain.service.error_ts_config_exists',
    ERROR_ESLINT_EXISTS = 'error.domain.service.error_eslint_exists',
    ERROR_JEST_EXISTS = 'error.domain.service.error_jest_exists',

    ERROR_ANDESITE_YML_EXISTS = 'error.domain.service.error_andesite_yml_exists',
    ERROR_ANDESITE_YML_INVALID_PROJECT_TYPE = 'error.domain.service.error_andesite_yml_invalid_project_type',
    ERROR_ANDESITE_YML_INVALID_CONFIG = 'error.domain.service.error_andesite_yml_invalid_config',

    ERROR_ENTRY_POINT_EXISTS = 'error.domain.service.error_entry_point_exists',

    ERROR_ANDESITE_YML_NOT_EXISTS = 'error.domain.service.error_andesite_yml_not_exists',
    ERROR_CANCEL_PROMPT = 'error.domain.service.error_cancel_prompt',
 }

