/* eslint-disable */ 

/**
 * Finds the greatest common divisor (GCD) of two numbers.
 *
 * @param {number} num1 - First number for finding GCD.
 * @param {number} num2 - Second number for finding GCD.
 * @return {number} The greatest common divisor of the two numbers.
 *
 * @example
 * // returns 5
 * gcd(5, 10);
 */
function gcd(num1, num2) {
    let gcdValue = 1;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Invalid input. Please provide numeric values.";
    }

    if (num1 < 0) {
        num1 = -num1;
    }
    if (num2 < 0) {
        num2 = -num2;
    }

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcdValue = i;
        }
    }

    return gcdValue;
}

module.exports = {
    gcd
};