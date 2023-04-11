/* eslint-disable */ 


        const {mode} = require("../functions/mode"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test the mode() function for the correct and expected results.
 */
function testMode() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "mode";

    // Test case: mode([1, 2, 2, 3]) should return 2
    try {
        const result = mode([1, 2, 2, 3]);
        if (result === 2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: mode([]) should return undefined
    try {
        const result = mode([]);
        if (result === undefined) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: mode([1, "two", 2, 3, "four"]) should return 2
    try {
        const result = mode([1, "two", 2, 3, "four"]);
        if (result === 2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: mode([1, 1, 1, 1, 1, 2, 2, 2, 2, 1]) should return 1
    try {
        const result = mode([1, 1, 1, 1, 1, 2, 2, 2, 2, 1]);
        if (result === 1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testMode,
};