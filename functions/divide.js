/* eslint-disable */ 

/**
 * Divides one number by another.
 *
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @return {number|null} The result of the division, or null if the divisor is zero or inputs are non-numeric.
 * @example
 * // returns 5
 * divide(10, 2)
 * // returns null
 * divide(10, 0)
 */
function divide(dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
        return null;
    }
    if (divisor === 0) {
        return null;
    }
    
    return dividend / divisor;
}

module.exports = {
    divide
};