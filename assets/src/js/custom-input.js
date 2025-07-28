/**
 * @file Handles custom input field functionality.
 * @description Handles the functionality of the custom number input field.
 * @since 2.0.0
 * @version 1.0.0
 * @author Israel Martins <hello@israelmartins.com>, Lightbulb Devs <dev@lightbulbdevs.com>
 */

/**
 * @function enableCustomInput
 * @description Initialises the custom number input field, attaching event listeners for increment, decrement, focus, and input.
 */
const enableCustomInput = () => {
    /**
     * @constant {Element} paragraphCountFieldGroup
     * @description The DOM element for the input group containing the paragraph count field.
     */
    const paragraphCountFieldGroup = document.querySelector('.input-group.paragraph-count');
    /**
     * @constant {string} paragraphCountFieldFocusClass
     * @description The CSS class applied to the input group when the field is focused or has a value.
     */
    const paragraphCountFieldFocusClass = 'input-focused';
    /**
     * @constant {Element} paragraphCountField
     * @description The DOM element for the paragraph count input field itself.
     */
    const paragraphCountField = document.querySelector('#paragraph-count-field');
    /**
     * @constant {string} paragraphCountFieldPlaceholder
     * @description The original placeholder text for the paragraph count field.
     */
    const paragraphCountFieldPlaceholder = 'Number of paragraphs';

    /**
     * @constant {Element} incrementButton
     * @description The DOM element for the button that increments the input field's value.
     */
    const incrementButton = document.querySelector('.increment');
    /**
     * @constant {Element} decrementButton
     * @description The DOM element for the button that decrements the input field's value.
     */
    const decrementButton = document.querySelector('.decrement');

    /**
     * @constant {number} incrementBy
     * @description The unit by which the number input field's value is incremented per increment.
     */
    const incrementBy = 1;
    /**
     * @constant {number} decrementBy
     * @description The unit by which the number input field's value is decremented per decrement.
     */
    const decrementBy = -1;

    /**
     * @function hideCountFieldLabel
     * @description Hides the custom label/placeholder by removing the focus class from the input group
     * and restoring the placeholder attribute, but only if the field is empty.
     */
    const hideCountFieldLabel = () => {
        if (paragraphCountFieldGroup.classList.contains(paragraphCountFieldFocusClass) && paragraphCountField.value.length < 1) {
            paragraphCountFieldGroup.classList.remove(paragraphCountFieldFocusClass);
            paragraphCountField.setAttribute('placeholder', paragraphCountFieldPlaceholder);
        }
    };

    /**
     * @function showCountFieldLabel
     * @description Shows the custom label/placeholder by adding the focus class to the input group
     * and removing the native placeholder attribute when the field contains a value.
     */
    const showCountFieldLabel = () => {
        if (!paragraphCountFieldGroup.classList.contains(paragraphCountFieldFocusClass) && paragraphCountField.value.length >= 1) {
            paragraphCountFieldGroup.classList.add(paragraphCountFieldFocusClass);
            paragraphCountField.removeAttribute('placeholder');
        }
    }

    /**
     * @function removeLeadingZero
     * @description Removes any leading zeros from the input field's value.
     */
    const removeLeadingZero = () => {
        if (paragraphCountField.value.startsWith('0')) {
            paragraphCountField.value = paragraphCountField.value.replace(/^0+/, '');

            if (paragraphCountField.value.length >= 1) {
                showCountFieldLabel();
            }
        }
    };

    /**
     * @function updateValue
     * @description Updates the numeric value of the input field based on a given delta.
     * Ensures the value does not go below 1, clearing the field if it does.
     * @param {number} delta - The amount to add or subtract from the current value (e.g., 1 for increment, -1 for decrement).
     */
    const updateValue = (delta) => {
        let currentValue = parseInt(paragraphCountField.value) || 0;
        let newValue = currentValue + delta;

        if (newValue < 1) {
            paragraphCountField.value = '';
            hideCountFieldLabel();
            return;
        }
        paragraphCountField.value = newValue;
        showCountFieldLabel();
    };

    /**
     * @function doCountFieldKeyEvent
     * @description Handles keyboard events for the input field, specifically ArrowUp/Down for value changes
     * and Escape for blurring the field. Prevents '0' key press directly to avoid leading zeros.
     * @param {KeyboardEvent} event - The keyboard event object.
     */
    const doCountFieldKeyEvent = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                updateValue(incrementBy);
                break;
            case 'ArrowDown':
                event.preventDefault();
                updateValue(decrementBy);
                break;
            case 'Escape':
                paragraphCountField.blur();
                hideCountFieldLabel();
                break;
            case '0':
                event.preventDefault();
                break;
        }
    };

    /**
     * Calls `showCountFieldLabel` initially to set the correct display state on load.
     */
    showCountFieldLabel();

    /**
     * Event listener for when the paragraph count field gains focus.
     */
    paragraphCountField.addEventListener('focus', showCountFieldLabel);
    /**
     * Event listener for when the paragraph count field loses focus.
     */
    paragraphCountField.addEventListener('blur', hideCountFieldLabel);
    /**
     * Event listener for the increment button click.
     */
    incrementButton.addEventListener('click', () => updateValue(incrementBy));
    /**
     * Event listener for the decrement button click.
     */
    decrementButton.addEventListener('click', () => updateValue(decrementBy));
    /**
     * Event listener for input changes in the paragraph count field, to remove leading zeros.
     */
    paragraphCountField.addEventListener('input', removeLeadingZero);
    /**
     * Event listener for keydown events in the paragraph count field, to handle arrow keys and escape.
     */
    paragraphCountField.addEventListener('keydown', doCountFieldKeyEvent);
}

/**
 * Run the `enableCustomInput` function once the entire HTML document has been loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', enableCustomInput);