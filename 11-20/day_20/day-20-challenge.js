// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
//
// Example
// For str = "krishan", the output should be "nahsirk".
//
// For str = "ultr53o?n", the output should be "nortlu".
//
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
// [output] a string

function reverseLetter(str) {
  // input: string
  // ouput: string without integers, reversed

  // remove integers using match(regex)
  // reverse() on the array
  // join()

  const regexp = /[a-z]/gi;
  return str.match(regexp).reverse().join("");
}
