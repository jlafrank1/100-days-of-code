// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  // input: an array of 10 numbers
  // output: a string, formatted specifically

  // goal: turn an array into a string
  // create an empty string

  // use slice() method on the array
  // to create the first 3 digits
  // the second three digits
  // the last four digits

  // join each segment with .join()

  // append the previously empty string

  //   console.log(numbers)

  let phoneNumber = "";

  const firstThree = numbers.slice(0, 3).join("");
  console.log(firstThree);

  const secondThree = numbers.slice(3, 6).join("");
  console.log(secondThree);

  const thirdFour = numbers.slice(6, 10).join("");
  console.log(thirdFour);

  phoneNumber = "(" + firstThree + ")" + " " + secondThree + "-" + thirdFour;
  console.log(phoneNumber);

  return phoneNumber;
}
