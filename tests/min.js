/* eslint-disable */ 


        const {min} = require("../functions/min"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for min() function.
 */
function testMinFunction() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "min";

    // Test case 1: Normal case with valid numeric array
    try {
        const expectedResult = 1;
        const actualResult = min([1, 2, 3]);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Empty array
    try {
        const expectedResult = null;
        const actualResult = min([]);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3: Array with non-numeric values
    try {
        const expectedResult = null;
        const actualResult = min(["a", "b", { prop: "value" }]);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4: Very large array
    try {
        const largeArray = Array(100000).fill(1).map((v, i) => v + i);
        const expectedResult = 1;
        const actualResult = min(largeArray);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Update README with the test results
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testMinFunction
};