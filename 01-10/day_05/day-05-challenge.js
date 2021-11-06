// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // input: string!
  // output: !gnirts

  // reverses letter order, but maintains word order
  // must maintain spaces

  // split() all of the sentence characters up into an array
  // reverse the order of the entire array
  // rejoin the array to form an entirely backward sentence

  // then split the string up by space
  // reverse the order of the items in the array AKA the words in the sentence
  // the join by space AKA the original order of the words

  const arr = str.split("").reverse().join("").split(" ").reverse().join(" ");

  console.log(arr);
  return arr;
}
