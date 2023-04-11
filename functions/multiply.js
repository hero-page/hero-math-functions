/* eslint-disable */ 

/**
 * Multiplies two numbers together
 *
 * @param {number} num1 - The first number to multiply.
 * @param {number} num2 - The second number to multiply.
 * @return {number} The result of multiplying num1 by num2.
 *
 * @example
 * // returns 15
 * multiply(3, 5);
 */
function multiply(num1, num2) {
    // Check if both inputs are numbers 
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Both arguments must be numbers.");
    }

    return num1 * num2;
}

module.exports = {
    multiply
};