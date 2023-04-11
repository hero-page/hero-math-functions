/* eslint-disable */ 

/**
 * Returns the square root of a number.
 *
 * @param {number} num - The number to find the square root of.
 * @return {number|null} The square root of the number, or null if the number is negative or non-numeric.
 *
 * @example
 * // returns 3
 * squareRoot(9);
 */
function squareRoot(num) {
    if (typeof num === "number" && num >= 0) {
        return Math.sqrt(num);
    }
    return null;
}

module.exports = {
    squareRoot
};