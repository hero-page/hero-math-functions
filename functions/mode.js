/* eslint-disable */ 

/**
 * Calculates the mode (most frequent) value in an array of numbers.
 *
 * @param {number[]} arr - The array of numbers to find the mode of.
 * @return {number} The mode of the provided array of numbers.
 * @example
 * // returns 2
 * mode([1, 2, 2, 3])
 */
function mode(arr) {
    const elementsCount = {};
    let mostFrequentElement;
    let maxCount = -1;

    for (const number of arr) {
        if (typeof number !== "number") continue;

        elementsCount[number] = (elementsCount[number] || 0) + 1;
        if (elementsCount[number] > maxCount) {
            maxCount = elementsCount[number];
            mostFrequentElement = number;
        }
    }

    return mostFrequentElement;
}

module.exports = {
    mode,
};