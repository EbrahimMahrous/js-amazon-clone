
// Easiest way to test:
// Open the website and try out the code.

// Disadvantages of Manual Testing
// 1. Hard to test every situation.
// 2. Hard to re-test.


// Automated Testing = using code to test code.



// Situation = test Case


// How many test cases should we have?

// Two Types of Test Cases: 
// 1. Basic test cases ==> tests if the code is working.
// 2. Edge cases ==> test with values that are tricky.


// Try to test something different in each test case.



import formatCurrency from "../scripts/utils/money.js";

// Group related tests together = test suite.
console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}

// Testing Framework = external library that helps us write tests easier.
// Most testing framework are similar Other testing framework ==> Jest(for ReactJS) + MochaJS
// Popular test framework is Jasmine ==> 




// 1. Create test suite.
// 2. Create tests.
// 3. Create values and display result.