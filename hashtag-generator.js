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
  const words = str.split(" ").filter(word => {
    const regex = /\S/
    return regex.test(word);
  })

  const upperCasedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })

  const result = "#" + upperCasedWords.join("")
  console.log(result)
  if (result.length > 140 || result.length < 2) {
    return false
  }
  return result;
};

const result1 = generateHashtag("     ");
const test1 = result1 === false

const result2 = generateHashtag("do we have a hashtag");
const test2 = result2 === "#DoWeHaveAHashtag"

const result3 = generateHashtag("codewars");
const test3 = result3 === "#Codewars"

console.table(
  {
    test1: test1,
    test2: test2,
    test3: test3
  }
)
