/**
 * @file Handles form feedback for the custom number input field.
 * @description Provides visual feedback (error messages) for the paragraph count input field,
 * ensuring the value adheres to defined constraints.
 * @since 2.0.0
 * @version 1.0.0
 * @author Lightbulb Devs <dev@lightbulbdevs.com>
 * @author Israel Martins <hello@israelmartins.com> (GitHub: @israelmartins96, X: @_izrel)
 */

/**
 * @function activateFormFeedback
 * @description Activates feedback mechanisms for the paragraph count input field,
 * including validation for minimum value and handling of leading zeros.
 */
const activateFormFeedback = () => {
    /**
     * @constant {Element} paragraphCountFieldGroup
     * @description The DOM element for the input group wrapper of the paragraph count field.
     */
    const paragraphCountFieldGroup = document.querySelector('.input-group.paragraph-count');
    /**
     * @constant {Element} paragraphCountField
     * @description The DOM element for the paragraph count input field itself.
     */
    const paragraphCountField = document.getElementById('paragraph-count-field');
    /**
     * @constant {Element} incrementButton
     * @description The DOM element for the increment button.
     */
    const incrementButton = document.querySelector('.increment');
    /**
     * @constant {Element} decrementButton
     * @description The DOM element for the decrement button.
     */
    const decrementButton = document.querySelector('.decrement');
    /**
     * @constant {string} InputErrorClass
     * @description CSS class for styling the input group when an error occurs.
     */
    const InputErrorClass = 'input-error';
    /**
     * @constant {string} warningActiveClass
     * @description CSS class for making the warning message visible.
     */
    const warningActiveClass = 'warning-message-active';

    /**
     * @constant {Element} warning
     * @description Dynamically created div element to display warning messages.
     */
    const warning = document.createElement('div');
    warning.className = 'warning-message position-absolute';
    warning.textContent = 'Value must be greater than 0';
    /**
     * Inserts the warning message element before the paragraph count field group in the DOM.
     */
    paragraphCountFieldGroup.parentElement.insertBefore(warning, paragraphCountFieldGroup);

    /**
     * @function showFeedbackMessage
     * @description Applies error styling to the input group and makes the warning message visible.
     */
    const showFeedbackMessage = () => {
        paragraphCountFieldGroup.classList.add(InputErrorClass);
        warning.classList.add(warningActiveClass);
    };

    /**
     * @function hideFeedbackMessage
     * @description Removes error styling from the input group and hides the warning message.
     */
    const hideFeedbackMessage = () => {
        paragraphCountFieldGroup.classList.remove(InputErrorClass);
        warning.classList.remove(warningActiveClass);
    };

    /**
     * @var {number} timeoutHideFeedbackMessage
     * @description Stores the ID of the timeout used to hide the feedback message after a delay.
     */
    let timeoutHideFeedbackMessage;

    /**
     * @function startTimeout
     * @description Starts a timeout to hide the feedback message after a specified duration (2000ms).
     * @param {number} timeoutID - The variable to store the timeout ID.
     */
    const startTimeout = (timeoutID) => {
        timeoutHideFeedbackMessage = setTimeout(hideFeedbackMessage, 2000);
    };

    /**
     * @function cancelTimeout
     * @description Clears any active timeout that would hide the feedback message.
     * @param {number} timeoutID - The ID of the timeout to clear.
     */
    const cancelTimeout = (timeoutID) => {
        clearTimeout(timeoutHideFeedbackMessage);
    };

    /**
     * @function showWarning
     * @description Helper function to display the warning message and set a timeout for its disappearance.
     * If a warning is already active, its timeout is reset.
     * @param {number} timeoutID - The variable to store the timeout ID for hiding the warning.
     */
    const showWarning = (timeoutID) => {
        showFeedbackMessage();
        startTimeout(timeoutID);
    };

    /**
     * @function checkValueUpdate
     * @description Checks the current value of the input field to ensure it is at least 1.
     * Displays a warning if the value is less than 1, otherwise hides any active feedback.
     */
    const checkValueUpdate = () => {
        let currentValue = parseInt(paragraphCountField.value) || 0;

        if (currentValue < 1) {
            if (!paragraphCountFieldGroup.classList.contains(InputErrorClass) && !warning.classList.contains(warningActiveClass)) {
                /**
                 * If no warning is active, show it.
                 */
                showWarning(timeoutHideFeedbackMessage);
            } else {
                /**
                 * If a warning is already active, cancel the existing timeout and show it again (resetting the timer).
                 */
                cancelTimeout(timeoutHideFeedbackMessage);
                showWarning(timeoutHideFeedbackMessage);
            }
        } else {
            /**
             * If the value is valid, hide any feedback messages.
             */
            hideFeedbackMessage();
        }
    };

    /**
     * @function doLeadingZeroCheck
     * @description Removes any leading zeros from the input field's value as the user types.
     * If the field becomes empty after removing zeros, it remains empty.
     */
    const doLeadingZeroCheck = () => {
        if (paragraphCountField.value.startsWith('0')) {
            paragraphCountField.value = paragraphCountField.value.replace(/^0+/, '');

            if (paragraphCountField.value === '') {
                paragraphCountField.value = '';
            }
        }
    };

    /**
     * @function doZeroKeyCheck
     * @description Prevents the user from typing '0' directly into the input field
     * to avoid unintended leading zeros or single '0' values.
     * @param {KeyboardEvent} event - The keyboard event object.
     */
    const doZeroKeyCheck = (event) => {
        if (event.key === '0') {
            event.preventDefault();
        }
    };

    /**
     * Adds an event listener to the increment button to check the value after an update.
     */
    incrementButton.addEventListener('click', () => checkValueUpdate());
    /**
     * Adds an event listener to the decrement button to check the value after an update.
     */
    decrementButton.addEventListener('click', () => checkValueUpdate());

    /**
     * Adds an event listener to the paragraph count field to block manual typing of '0'.
     */
    paragraphCountField.addEventListener('keydown', doZeroKeyCheck);

    /**
     * Adds an event listener to the paragraph count field to remove leading zeros on input.
     */
    paragraphCountField.addEventListener('input', doLeadingZeroCheck);
};

/**
 * Event listener for the DOMContentLoaded event.
 * Ensures the `activateFormFeedback` function runs once the entire HTML document has been loaded and parsed.
 */
document.addEventListener("DOMContentLoaded", activateFormFeedback);