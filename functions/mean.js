/* eslint-disable */ 

/**
 * Calculates the mean (average) of an array of numbers.
 *
 * @param {number[]} numArray - The array of numbers to calculate the mean.
 * @return {number} The mean of the given array of numbers.
 * @example
 * // Get the mean of an array of numbers
 * mean([1, 2, 3]) // returns 2
 */
function mean(numArray) {
    const validNumbers = numArray.filter(num => typeof num === 'number');
    if (validNumbers.length === 0) {
        return 0;
    }
    const sum = validNumbers.reduce((accumulator, num) => accumulator + num, 0);
    return sum / validNumbers.length;
}

module.exports = {
    mean
};