/* eslint-disable */ 

/**
 * Returns the minimum value in an array.
 *
 * @param {number[]} array - The array to find the minimum value in.
 * @return {number|null} The minimum value in the array or null if the array is empty or only contains non-numeric values.
 * 
 * @example
 * min([1, 2, 3]); // Returns 1
 */
function min(array) {
    const numericArray = array.filter((element) => typeof element === "number");
    if (numericArray.length === 0) {
        return null;
    }

    let minValue = numericArray[0];
    for (const value of numericArray) {
        minValue = value < minValue ? value : minValue;
    }
    return minValue;
}

module.exports = {
    min
};