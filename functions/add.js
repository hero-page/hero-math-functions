/* eslint-disable */ 

/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @return {number} The sum of the two numbers.
 * @example
 * add(2, 3) // returns 5
 */
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return null;
    return a + b;
}

module.exports = {
    add
};