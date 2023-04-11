/* eslint-disable */ 

/**
 * Returns the maximum value in an array.
 *
 * @param {number[]} inputArray - The array of numbers to find the maximum value from.
 * @return {number | null} The maximum value in the array or null if the array is empty or contains non-numeric values.
 * @example
 * max([1, 2, 3]); // returns 3
 */
function max(inputArray) {
    let maxValue = null;
    for (const value of inputArray) {
        if (typeof value !== "number") {
            return null;
        }
        maxValue = maxValue === null ? value : Math.max(maxValue, value);
    }
    return maxValue;
}

module.exports = {
    max
};