// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  // use regex to match any instances of '-' or '_'
  // split by exp
  // capitalize first letter of each word except index 0
  // .join back together

  const exp = /[-_]/;

  const arr = str.split(exp);
  console.log(arr);

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    console.log(arr[i]);
  }

  return arr.join("");
}
