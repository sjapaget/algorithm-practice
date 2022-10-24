/*

https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/


const generateHashtag = str => {

};

const result1 = generateHashtag("");
const test1 = result1 === false

const result2 = generateHashtag("Do We have A Hashtag");
const test2 = result2 === "#DoWeHaveAHashtag"

console.table(
  {
    test1: test1,
    test2: test2
  }
)
