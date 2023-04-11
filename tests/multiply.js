/* eslint-disable */ 


        const {multiply} = require("../functions/multiply"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
* Test for multiply function
* @example
* // number_of_tests_passed: 4, number_of_tests_failed: 0
* testMultiply()
*/
function testMultiply() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "multiply";

    // Test case 1
    try {
        if (multiply(3, 5) === 15) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 2: Large numbers
    try {
        if (multiply(100000, 100000) === 10000000000) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 3: Small numbers
    try {
        if (multiply(0.1, 0.2) === 0.02) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 4: Negative numbers
    try {
        if (multiply(-2, 3) === -6) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testMultiply
};