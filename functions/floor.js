/* eslint-disable */ 

/**
 * Rounds a number down to the nearest integer.
 *
 * @param {number} num - The number to round down.
 * @return {number} The rounded down number.
 * @example
 * floor(3.7); // returns 3
 */
function floor(num) {
    if (typeof num === "number") {
        return Math.floor(num);
    }
    throw new Error("Input must be a number.");
}

module.exports = {
    floor
};