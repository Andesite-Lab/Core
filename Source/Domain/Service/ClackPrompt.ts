import {
    cancel as _cancel,
    intro as _intro,
    outro as _outro,
    select as _select,
    spinner as _spinner,
    text as _text,
    isCancel
} from '@clack/prompts';

import { DomainErrorKeys } from '@/Common/Error/Enum/index.js';
import { AndesiteError } from '@/Common/Error/index.js';

/**
 * Interface for the options of the select prompt.
 */
interface IOptions {
    /**
     * The value of the option.
     */
    value: string | boolean | number;
    /**
     * The label of the option.
     */
    label: string;
    /**
     * The hint of the option.
     */
    hint?: string;
}

/**
 * Interface for the options of the select prompt.
 */
interface ISelectOptions {
    /**
     * The message to display in the select prompt.
     */
    message: string;
    /**
     * The options for the select prompt. {@link IOptions}
     */
    options: IOptions[];
    /**
     * The initial value of the select prompt.
     */
    initialValue?: string | boolean | number;
}

/**
 * Interface for the options of the text prompt.
 */
interface ITextOptions {
    /**
     * The message to display in the text prompt.
     */
    message: string;
    /**
     * The placeholder of the text prompt.
     */
    placeholder?: string;
    /**
     * The default value of the text prompt.
     */
    defaultValue?: string;
    /**
     * The initial value of the text prompt.
     */
    initialValue?: string;
    /**
     * The validation function of the text prompt.
     *
     * @param value - The value to validate.
     * @returns The error message if the value is invalid.
     */
    validate?: (value: string) => string | void;
}

/**
 * Interface for the options of the spinner prompt.
 */
interface ISpinnerOptions {
    /**
     * Start the spinner.
     *
     * @param msg - The message to display when the spinner starts.
     */
    start: (msg?: string) => void;

    /**
     * Stop the spinner.
     *
     * @param msg - The message to display when the spinner stops.
     * @param code - The code to display when the spinner stops.
     */
    stop: (msg?: string, code?: number) => void;

    /**
     * Display a message.
     *
     * @param msg - The message to display.
     */
    message: (msg?: string) => void;
}

/**
 * Display the intro message.
 *
 * @param message - The message to display in the intro.
 */
export function intro(message: string): void {
    _intro(message);
}

/**
 * Display the outro message.
 *
 * @param message - The message to display in the outro.
 */
export function outro(message: string): void {
    _outro(message);
}

/**
 * Throw an error when the user cancels the prompt.
 *
 * @throws ({@link AndesiteError}) - If the user cancels the prompt. ({@link DomainErrorKeys.ERROR_CANCEL_PROMPT})
 */
function _throwWhenCancel(): void {
    throw new AndesiteError({
        messageKey: DomainErrorKeys.ERROR_CANCEL_PROMPT,
    });
}

/**
 * Display the outro message based on the time of the day.
 *
 * @param dayMessage - The message to display if it is day time. (Default: 'Have a great day! 🌞')
 * @param nightMessage - The message to display if it is night time. (Default: 'Have a great night! 🌚')
 */
export function outroBasedOnTime(
    dayMessage: string = 'Have a great day! 🌞',
    nightMessage: string = 'Have a great night! 🌚'
): void {
    const date = new Date();
    if (date.getHours() >= 8 && date.getHours() <= 18)
        _outro(dayMessage);
    else
        _outro(nightMessage);
}

/**
 * Cancel the prompt.
 *
 * @param message - The message to display when the prompt is canceled.
 */
export function cancel(message: string = 'Canceled'): void {
    _cancel(message);
}

/**
 * Display a select prompt to the user.
 *
 * @param opt - The options for the select prompt. ({@link ISelectOptions})
 *
 * @throws ({@link AndesiteError}) - If the user cancels the prompt. ({@link DomainErrorKeys.ERROR_CANCEL_PROMPT})
 *
 * @returns The value selected by the user.
 */
export async function select(opt: ISelectOptions): Promise<string | number | boolean | symbol>  {
    const result = await _select({
        message: opt.message,
        initialValue: opt.initialValue ?? '',
        options: opt.options.map((option) => ({
            value: option.value,
            label: option.label,
            hint: option.hint ?? ''
        })),
    });
    if (isCancel(result))
        _throwWhenCancel();
    return result;
}

/**
 * Display a text prompt to the user.
 *
 * @param opt - The options for the text prompt. ({@link ITextOptions})
 *
 * @throws ({@link AndesiteError}) - If the user cancels the prompt. ({@link DomainErrorKeys.ERROR_CANCEL_PROMPT})
 *
 * @returns The value entered by the user.
 */
export function text(opt: ITextOptions): Promise<string | symbol> {
    const result = _text({
        message: opt.message,
        placeholder: opt.placeholder ?? '',
        defaultValue: opt.defaultValue ?? '',
        initialValue: opt.initialValue ?? '',
        validate: opt.validate ?? (():undefined => undefined)
    });
    if (isCancel(result))
        _throwWhenCancel();
    return result;
}

/**
 * Display a spinner prompt to the user.
 *
 * @returns The spinner options. ({@link ISpinnerOptions})
 */
export function spinner(): ISpinnerOptions {
    return _spinner();
}
