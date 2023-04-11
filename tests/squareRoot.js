/* eslint-disable */ 


        const {squareRoot} = require("../functions/squareRoot"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for squareRoot function.
 */
function testSquareRoot() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "squareRoot";

    // Test Case 1: squareRoot(9) should return 3
    try {
        const expectedValue = 3;
        const actualValue = squareRoot(9);
        if (actualValue === expectedValue) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test Case 2: squareRoot(-3) should return null
    try {
        const expectedValue = null;
        const actualValue = squareRoot(-3);
        if (actualValue === expectedValue) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test Case 3: squareRoot(0) should return 0
    try {
        const expectedValue = 0;
        const actualValue = squareRoot(0);
        if (actualValue === expectedValue) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test Case 4: squareRoot(100000000) should return the square root of 100000000
    try {
        const expectedValue = Math.sqrt(100000000);
        const actualValue = squareRoot(100000000);
        if (actualValue === expectedValue) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(
        generateTestBadge(
            name_of_function,
            number_of_tests_passed,
            number_of_tests_failed
        )
    );
}

module.exports = {
    testSquareRoot
};