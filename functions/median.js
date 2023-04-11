/* eslint-disable */ 

/**
 * Calculates the median (middle) value of an array of numbers.
 *
 * @param {number[]} numArray - The array of numbers to calculate the median.
 * @return {number | null} The median value of the input array or null if the array is empty or has no numeric values.
 * @example
 * // returns 2
 * median([1, 2, 3])
 */
function median(numArray) {
    const filteredArray = numArray.filter((num) => typeof num === "number");

    if (filteredArray.length === 0) {
        return null;
    }

    filteredArray.sort((a, b) => a - b);

    const middleIndex = Math.floor(filteredArray.length / 2);

    if (filteredArray.length % 2 === 0) {
        return (filteredArray[middleIndex - 1] + filteredArray[middleIndex]) / 2;
    } else {
        return filteredArray[middleIndex];
    }
}

module.exports = {
    median
};