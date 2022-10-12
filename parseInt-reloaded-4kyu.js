/*
https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

const numWords = {
  "zero": "0",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "ten": "10",
  "eleven": "11",
  "twelve": "12",
  "thirteen": "13",
  "fourteen": "14",
  "fifteen": "15",
  "sixteen": "16",
  "seventeen": "17",
  "eighteen": "18",
  "nineteen": "19",
  "twenty": "20",
  "thirty": "30",
  "forty": "40",
  "fifty": "50",
  "sixty": "60",
  "seventy": "70",
  "eighty": "80",
  "ninety": "90",
  "hundred": "00",
  "thousand": "000",
  "million": "000000"
}

const specialWordsHandler = (word, answer) => {
  if (word === "hundred" && answer.length < 2) {
    while (answer.length < 2) { answer = 0 + answer };
  }
  else if (word === "thousand" && answer.length < 3) {
    while (answer.length < 3) { answer = 0 + answer };
  }
  else if (word === "million" && answer.length < 6) {
    while (answer.length < 6) { answer = 0 + answer };
  }
  return answer
}

const hyphenhandler = (word, answer) => {
  const splitWord = word.split("-");
  const units = numWords[splitWord[1]];
  const tens = numWords[splitWord[0]][0];
  answer = tens + units + answer;
  return answer
}

const parseInt = (str) => {
  console.log(str)
  words = str.split(" ").reverse();
  specialWords = ["hundred", "thousand", "million"];
  let answer = "";
  words.forEach((word, index) => {
    if (specialWords.includes(word)) {
      if (specialWords.includes(words[index - 1])) {
        //we're dealing with a "three hundred thousand" style situation
        answer = '00' + answer
      } else {
        answer = specialWordsHandler(word, answer);
      }
    }
    else {
      if (numWords[word]) { answer = numWords[word] + answer }
      else if (word !== "and") {
        answer = hyphenhandler(word, answer);
      }
    }
  })

  return Number(answer)
}

const result1 = parseInt('two hundred three thousand');
const test1 = result1 === 203000;
// Need to condition the part of specialsHandler for "hundred" so it can deal with a case where answer.length > 2 but 0s do need to be added

console.table({
  result1,
  test1
})
