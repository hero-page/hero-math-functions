/* eslint-disable */ 


        const {subtract} = require("../functions/subtract"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for subtract
 */
function testSubtract() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "subtract";

    // Test case: subtract(7, 4) should return 3
    try {
        const result = subtract(7, 4);
        if (result === 3) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Extreme case: Negative result
    try {
        const result = subtract(-2, 3);
        if (result === -5) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Extreme case: Very large numbers
    try {
        const result = subtract(1e+100, 2e+99);
        if (result === 9e+99) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Extreme case: Very small numbers
    try {
        const result = subtract(1e-100, 2e-101);
        if (result === 8e-101) {
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
    testSubtract
};