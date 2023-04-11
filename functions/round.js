/* eslint-disable */ 

/**
 * Rounds a number to the nearest integer.
 *
 * @param {number} num - The number to round.
 * @return {number} The rounded integer.
 * @example
 * // Returns 4
 * round(3.5);
 */
function round(num) {
    if (typeof num !== "number") {
        return;
    }

    return Math.round(num);
}

module.exports = {
    round
};