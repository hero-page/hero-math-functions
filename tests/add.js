/* eslint-disable */ 


        const {add} = require("../functions/add"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for add() function.
 */
function testAdd() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "add";

    // Test case 1: add(2, 3) returns 5
    try {
        const result1 = add(2, 3);
        if (result1 === 5) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Extreme case 1: very large numbers
    try {
        const result2 = add(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        if (result2 === Number.MAX_SAFE_INTEGER * 2) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Extreme case 2: very small numbers
    try {
        const result3 = add(Number.MIN_VALUE, Number.MIN_VALUE);
        if (result3 === Number.MIN_VALUE * 2) {
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
    testAdd
};