// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
//
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  // track how many times math needs to happen

  // if a number is more than the length of one
  // split the items into an array
  // and multiply each item in the array by the next item
  // and add 1 to the answer
  // re-calc the length

  let arr = num.toString().split("");
  let newVal;
  let answer = 0;

  while (arr.length > 1) {
    newVal = arr.reduce((a, b) => {
      return (a *= b);
    });
    arr = newVal.toString().split("");
    answer++;
  }

  return answer;
}
