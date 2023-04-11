/* eslint-disable */ 

/**
 * Raises a number to the given exponent.
 *
 * @param {number} base - The base number to raise.
 * @param {number} exponent - The exponent to raise the base to.
 * @return {number} The result of raising the base number to the given exponent.
 * @example
 * // returns 8
 * power(2, 3);
 */
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Both input values should be numbers.');
    }
    return Math.pow(base, exponent);
}

module.exports = {
    power
};