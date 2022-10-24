/*
https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil


*/

const nextBigger = num => {
  //split num into an array

  //iterate over the num array backwards

  //check if the current element is bigger than the next element along
    // if it is bigger => swap it's position with that of the one next to it & stop the loop

  // reconstruct an integer to return
}

result1 = nextBigger(12);
test1 = result1 === 21

result2 = nextBigger(513)
test2 = result2 === 531

result3 = nextBigger(2017)
test3 = result3 === 2071
