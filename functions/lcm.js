/* eslint-disable */ 

/**
 * Finds the least common multiple (LCM) of two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @return {number} The least common multiple (LCM) of the two input numbers.
 *
 * @example
 * // Returns 15
 * lcm(3, 5);
 */
function lcm(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return undefined;
    }

    const gcd = (a, b) => {
        if (b === 0) {
            return Math.abs(a);
        }
        return gcd(b, a % b);
    };

    const result = Math.abs(num1 * num2) / gcd(num1, num2);

    return result;
}

module.exports = {
    lcm
};