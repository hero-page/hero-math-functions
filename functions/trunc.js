/* eslint-disable */ 

/**
 * Truncates (removes the decimal) a number.
 *
 * @param {number} number - The number to truncate.
 * @return {number} The truncated number.
 *
 * @example
 * // Returns 3
 * trunc(3.7);
 */
function trunc(number) {
    return Math.trunc(number);
}

module.exports = {
    trunc
};