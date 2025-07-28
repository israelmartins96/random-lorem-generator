/**
 * Random Lorem Generator (Main Application Script).
 * 
 * @description Handles the generation of non-distracting random dummy placeholder text.
 * @version 2.0.0
 * @author Israel Martins <hello@israelmartins.com>, Lightbulb Devs <dev@lightbulbdevs.com>
 */

/**
 * @function initialiseRandomLoremGenerator
 * @description Initialises the Random Lorem Generator, setting up variables, helper functions, and event listeners.
 */
const initialiseRandomLoremGenerator = () => {
    /**
     * @constant {string} rlgInitMessage
     * @description Text generator initialisation message for console output.
     */
    const rlgInitMessage = 'Init Random Lorem Generator ✔';

    /**
     * @constant {number} minSentenceWords
     * @description Minimum number of words in a generated sentence.
     */
    const minSentenceWords = 11;
    /**
     * @constant {number} maxSentenceWords
     * @description Maximum number of words in a generated sentence.
     */
    const maxSentenceWords = 20;

    /**
     * @constant {number} minParagraphSentences
     * @description Minimum number of sentences in a generated paragraph.
     */
    const minParagraphSentences = 7;
    /**
     * @constant {number} maxParagraphSentences
     * @description Maximum number of sentences in a generated paragraph.
     */
    const maxParagraphSentences = 10;

    /**
     * @var {Array<Object>} responseText
     * @description Stores the raw data fetched from the dummy text source.
     */
    let responseText = [];

    /**
     * @var {string} stringOfWords
     * @description A string containing all words from the selected dummy text source.
     */
    let stringOfWords = '';

    /**
     * @var {Array<string>} arrayOfWords
     * @description An array of individual words derived from `stringOfWords`.
     */
    let arrayOfWords = [];

    /**
     * @var {string} theParagraph
     * @description Stores the current paragraph being constructed.
     */
    let theParagraph;

    /**
     * @var {Array<string>} arrayOfParagraphs
     * @description Stores all generated paragraphs.
     */
    let arrayOfParagraphs = [];

    /**
     * @var {number} paragraphIndex
     * @description Index to keep track of the current paragraph being processed or displayed.
     */
    let paragraphIndex = 0;

    /**
     * @function randomNumber
     * @description Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
     * @returns {number} A random number.
     */
    const randomNumber = () => {
        return Math.random();
    };

    /**
     * @function randomInteger
     * @description Generates a random integer between 0 (inclusive) and 9 (inclusive).
     * @returns {number} A random integer.
     */
    const randomInteger = () => {
        return Math.floor(randomNumber() * 10);
    }

    /**
     * @function restrictRandomIntegerToRange
     * @description Restricts a random integer to be within a specified minimum and maximum range.
     * @param {number} min - The minimum allowed value.
     * @param {number} max - The maximum allowed value.
     * @returns {number} A random integer within the specified range.
     */
    const restrictRandomIntegerToRange = (min, max) => {
        return Math.min(Math.max(min, randomInteger()), max);
    };

    /**
     * @function selectRandomArrayIndex
     * @description Selects a random element from an array.
     * @param {Array<any>} arrayOfWords - The array from which to select an element.
     * @returns {any} A randomly selected element from the array.
     */
    const selectRandomArrayIndex = (arrayOfWords) => {
        const minIndex = 0;
        const maxIndex = arrayOfWords.length - 1;

        const selectedStringOfWordsIndex = restrictRandomIntegerToRange(minIndex, maxIndex);

        return arrayOfWords[selectedStringOfWordsIndex];
    };

    /**
     * @function convertStringToArray
     * @description Converts a string into an array of substrings, split by spaces.
     * @param {string} string - The string to convert.
     * @returns {Array<string>} An array of words.
     */
    const convertStringToArray = (string) => {
        return string.split(' ');
    };

    /**
     * @function getLastArrayIndex
     * @description Gets the index of the last item in an array.
     * @param {Array<any>} array - The array to query.
     * @returns {number} The index of the last element.
     */
    const getLastArrayIndex = (array) => {
        const lastArrayIndex = array.length - 1;

        return lastArrayIndex;
    };

    /**
     * @function getRandomArrayIndex
     * @description Picks a random index from an array.
     * @param {Array<any>} array - The array to query.
     * @returns {number} A random valid index for the given array.
     */
    const getRandomArrayIndex = (array) => {
        const lastArrayIndex = getLastArrayIndex(array);

        return restrictRandomIntegerToRange(0, lastArrayIndex);
    };

    /**
     * @function pickRandomSentenceWordCount
     * @description Picks a random word count for a sentence, within the defined min/max.
     * @returns {number} The chosen word count for a sentence.
     */
    const pickRandomSentenceWordCount = () => {
        return restrictRandomIntegerToRange(minSentenceWords, maxSentenceWords);
    };

    /**
     * @function pickRandomSentenceCount
     * @description Picks a random sentence count for a paragraph, within the defined min/max.
     * @returns {number} The chosen sentence count for a paragraph.
     */
    const pickRandomSentenceCount = () => {
        return restrictRandomIntegerToRange(minParagraphSentences, maxParagraphSentences);
    };

    /**
     * @function capitaliseFirstLetter
     * @description Capitalises the first letter of a given string.
     * @param {string} string - The input string.
     * @returns {string} The string with its first letter capitalised.
     */
    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    /**
     * @function makeRandomSentenceFromArray
     * @description Generates a sentence of random words from a provided array, ensuring words do not repeat.
     * @param {Array<string>} array - The source array of words.
     * @returns {string} A randomly generated sentence.
     */
    const makeRandomSentenceFromArray = (array) => {
        /**
         * @var {Array<string>} sentenceWords
         * @description Words that would make up the sentence are passed to this array.
         */
        let sentenceWords = [];
        /**
         * @var {string} theSentence
         * @description The eventual complete sentence.
         */
        let theSentence;
        /**
         * @constant {number} sentenceWordCount
         * @description Randomly generated number of words for the sentence.
         */
        const sentenceWordCount = pickRandomSentenceWordCount();
        /**
         * @constant {number} lastArrayIndex
         * @description The index of the last item in the source array.
         */
        const lastArrayIndex = getLastArrayIndex(array);
        /**
         * @function arrayIndex
         * @description Returns a randomly generated array item index.
         * @returns {number} A random index.
         */
        const arrayIndex = () => {
            return getRandomArrayIndex(array);
        };

        /**
         * Populates `sentenceWords` with words until its count equals `sentenceWordCount`.
         */
        while (sentenceWordCount > sentenceWords.length) {
            sentenceWords.push(array[arrayIndex()]);
        }

        /**
         * Prevents words from appearing more than once in a sentence.
         * Replaces `sentenceWords` with the unique words.
         */
        sentenceWords.reduce(
            (nonRepeatingArray, arrayItem) => {
                if (nonRepeatingArray.indexOf(arrayItem) === -1) {
                    nonRepeatingArray.push(arrayItem);
                }

                sentenceWords = nonRepeatingArray;

                return nonRepeatingArray;
            }, []
        );

        /**
         * Merges the array of words into a single sentence string.
         */
        theSentence = sentenceWords.join(' ');

        /**
         * Capitalises the first letter of the sentence.
         */
        theSentence = capitaliseFirstLetter(theSentence);

        /**
         * Adds a full stop at the end of the sentence.
         */
        theSentence += '.';

        return theSentence;
    };

    /**
     * @constant {Element} paragraphCountFieldGroup
     * @description DOM element for the paragraph count input group.
     */
    const paragraphCountFieldGroup = document.querySelector('.input-group.paragraph-count');
    /**
     * @constant {string} paragraphCountFieldFocusClass
     * @description CSS class applied when the paragraph count field is focused.
     */
    const paragraphCountFieldFocusClass = 'input-focused';
    /**
     * @constant {string} paragraphCountFieldPlaceholder
     * @description Placeholder text for the paragraph count input field.
     */
    const paragraphCountFieldPlaceholder = 'Number of paragraphs';

    /**
     * @constant {Element} paragraphCountField
     * @description DOM element for the paragraph count input field.
     */
    const paragraphCountField = document.querySelector('#paragraph-count-field');

    /**
     * @constant {Element} textGenerationTrigger
     * @description DOM element for the button that triggers text generation.
     */
    const textGenerationTrigger = document.querySelector('.generate-text-trigger');

    /**
     * @constant {Element} resetTrigger
     * @description DOM element for the button that triggers a reset.
     */
    const resetTrigger = document.querySelector('.reset-trigger');

    /**
     * @constant {Element} outputSection
     * @description DOM element for the section where generated text is displayed.
     */
    const outputSection = document.querySelector('.generated-text-area');

    /**
     * @constant {Element} copiableGeneratedText
     * @description DOM element containing the generated text, designed for easy copying.
     */
    const copiableGeneratedText = document.querySelector('.copiable-generated-text');

    /**
     * @constant {Element} copyButton
     * @description DOM element for the button that copies the generated text.
     */
    const copyButton = document.querySelector('.copy-text');

    /**
     * @constant {string} enabledButtonSelector
     * @description CSS selector for a button in an enabled state.
     */
    const enabledButtonSelector = 'button-enabled';

    /**
     * @constant {string} disabledButtonSelector
     * @description CSS selector for a button in a disabled state.
     */
    const disabledButtonSelector = 'button-disabled';

    /**
     * @function generateText
     * @description Handles the main logic for generating paragraphs of text.
     * It fetches source text if not already loaded and then proceeds with generation.
     */
    const generateText = () => {
        /**
         * Removes the 'empty' class from the output section, making it visible or ready for content.
         */
        outputSection.classList.remove('empty');

        /**
         * @function proceedWithTextGeneration
         * @description Inner function that generates sentences and paragraphs once the source text is available.
         */
        const proceedWithTextGeneration = () => {
            let arrayOfSentences = [];
            /**
             * Populates `arrayOfSentences` with random sentences until the desired count is met.
             */
            while (arrayOfSentences.length < pickRandomSentenceCount()) {
                arrayOfSentences.push(makeRandomSentenceFromArray(arrayOfWords));
            }

            /**
             * Joins the generated sentences to form a complete paragraph.
             */
            theParagraph = arrayOfSentences.join(' ');

            /**
             * Checks if more paragraphs are needed based on the user's input.
             * Appends generated paragraphs to the output and the hidden copiable text area.
             */
            if (paragraphCountField.value > arrayOfParagraphs.length) {
                arrayOfParagraphs.push(theParagraph);
                outputSection.innerHTML += `<p>${arrayOfParagraphs[paragraphIndex]}</p>`;
                copiableGeneratedText.innerHTML += `${arrayOfParagraphs[paragraphIndex]}`;

                /**
                 * Adds line breaks for readability in the copiable text if more paragraphs are expected.
                 * Otherwise, toggles the state of the reset and copy buttons.
                 */
                if (paragraphCountField.value > arrayOfParagraphs.length) {
                    copiableGeneratedText.innerHTML += `\n\n`;
                    paragraphIndex++;
                } else {
                    toggleButtonState([resetTrigger, copyButton]);
                }

                return generateText();
            }
        };

        /**
         * Fetches dummy text from a JSON file if `responseText` is empty.
         * Parses the JSON and calls `proceedWithTextGeneration` upon success.
         * Handles potential errors during the fetch operation.
         */
        if (responseText.length < 1) {
            fetch('./data/data-dummy-text.json')
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.json();
                })
                .then(data => {
                    responseText = data;
                    stringOfWords = selectRandomArrayIndex(responseText).words;
                    arrayOfWords = convertStringToArray(stringOfWords);
                    proceedWithTextGeneration();
                })
                .catch(error => {
                    console.error('Failed to load dummy text:', error);
                });
        } else {
            /**
             * If source text is already loaded, proceed directly with text generation.
             */
            proceedWithTextGeneration();
        }
    };

    /**
     * @function switchButtonState
     * @description Switches the visual state of a given button between enabled and disabled.
     * @param {Element} button - The button DOM element to switch state.
     */
    const switchButtonState = (button) => {
        if (button.classList.contains(disabledButtonSelector)) {
            button.classList.add(enabledButtonSelector);
            button.classList.remove(disabledButtonSelector);
            return;
        } else {
            /**
             * If the copiable text area is empty, ensures the button remains disabled.
             */
            if (copiableGeneratedText.innerHTML.length < 1) {
                button.classList.remove(enabledButtonSelector);
                button.classList.add(disabledButtonSelector);
            }
        }
    };

    /**
     * @function toggleButtonState
     * @description Toggles the enabled/disabled state of one or more buttons.
     * @param {Element|Array<Element>} button - A single button DOM element or an array of button DOM elements.
     */
    const toggleButtonState = (button) => {
        if (Array.isArray(button)) {
            button.forEach(theButton => {
                switchButtonState(theButton);
            });

            return;
        } else {
            switchButtonState(button);
        }
    };

    /**
     * @function clearCopiedState
     * @description Resets the copy button's visual state if it currently shows "Copied".
     */
    const clearCopiedState = () => {
        if (copyButton.classList.contains('copied')) {
            copyButton.classList.remove('copied');
        }
    };

    /**
     * @function doReset
     * @description Resets all generated text variables, clears the output sections, and prepares for new generation.
     */
    const doReset = () => {
        arrayOfParagraphs = [];
        paragraphIndex = 0;
        outputSection.innerHTML = '';
        copiableGeneratedText.innerHTML = '';
        outputSection.classList.add('empty');
        clearCopiedState();
        paragraphCountField.focus();
    };

    /**
     * @function hideCountFieldLabel
     * @description Hides the focus class from the paragraph count field group and restores its placeholder.
     */
    const hideCountFieldLabel = () => {
        if (paragraphCountFieldGroup.classList.contains(paragraphCountFieldFocusClass)) {
            paragraphCountFieldGroup.classList.remove(paragraphCountFieldFocusClass);
            paragraphCountField.setAttribute('placeholder', paragraphCountFieldPlaceholder);
        }
    };

    /**
     * @function outputGeneratedText
     * @description Initiates the generation and output of text, ensuring a valid paragraph count.
     */
    const outputGeneratedText = () => {
        /**
         * Only generates text if the requested paragraph count is 1 or more.
         */
        if (paragraphCountField.value >= 1) {
            /**
             * Resets previous output and input variables.
             */
            doReset();

            /**
             * Generates the text, activates copy/reset buttons, and clears any "copied" state.
             */
            generateText();
            toggleButtonState([resetTrigger, copyButton]);
            clearCopiedState();
        }
    };

    /**
     * @function copyGeneratedText
     * @description Copies the content of `copiableGeneratedText` to the user's clipboard.
     * Also updates the copy button's visual state to indicate "Copied".
     */
    const copyGeneratedText = () => {
        /**
         * Selects and copies the text from the hidden output area.
         */
        copiableGeneratedText.select();
        document.execCommand('copy');

        /**
         * Adds a 'copied' class to the button for visual feedback.
         */
        copyButton.classList.add('copied');

        /**
         * Sets a timeout to remove the 'copied' class after a brief period.
         */
        unsetCopiedState = setTimeout(
            () => {
                copyButton.classList.remove('copied');
            },
            2000
        );
    };

    /**
     * Event listener for the text generation trigger button.
     * Prevents default form submission and calls `outputGeneratedText`.
     */
    textGenerationTrigger.addEventListener('click', event => {
        event.preventDefault();
        outputGeneratedText();
    });

    /**
     * Event listener for the reset trigger button.
     * Resets the form and output, hides the count field label, and toggles button states.
     */
    resetTrigger.addEventListener('click', () => {
        doReset();
        hideCountFieldLabel();
        toggleButtonState([resetTrigger, copyButton]);
    });

    /**
     * Event listener for the copy button.
     * Calls `copyGeneratedText` when clicked.
     */
    copyButton.addEventListener('click', copyGeneratedText);

    /**
     * Logs the initialisation message to the console.
     */
    console.log(rlgInitMessage);
};

/**
 * Event listener for the DOMContentLoaded event.
 * Ensures the `initialiseRandomLoremGenerator` function runs once the entire HTML document has been loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', initialiseRandomLoremGenerator);