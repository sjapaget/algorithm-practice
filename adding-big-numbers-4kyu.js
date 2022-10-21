/*
  https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
  add("123", "321"); -> "444"
  add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  return (Number(a) + Number(b)).toString(); // Fix me!
}

const result1 = add('63829983432984289347293874', '90938498237058927340892374089');
const test1 = result1 === "91002328220491911630239667963"

console.table([result1, test1]);
