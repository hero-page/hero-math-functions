/* eslint-disable */ 


        const {isPrime} = require("../functions/isPrime"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for isPrime.
 */
function testIsPrime() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "isPrime";

    // Test case: isPrime(5) returns true
    try {
        const result = isPrime(5);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: isPrime with a very large prime number
    try {
        const result = isPrime(982451653);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: isPrime with a very large non-prime number
    try {
        const result = isPrime(1000000000);
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: isPrime with a negative number
    try {
        const result = isPrime(-5);
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: isPrime with a non-integer number
    try {
        const result = isPrime(5.5);
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Call addToReadme with the appropriate badge
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testIsPrime
};