// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  // input: string with numbers
  // output: string with chars

  // if "5" replace with "S"
  // if "0" replace with "O"
  // if "1" replace with "I"

  // look for a javascript method that looks for numbers
  // split out the string input into an array .split()
  // for each item in the array, look for 5,1, or 0
  // then replace with a letter
  // then .join() the array to re-combine the word

  const arr = string.split("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "0") {
      // replace with O
      arr[i] = "O";
      console.log(arr[i]);
    } else if (arr[i] == "5") {
      // replace with S
      arr[i] = "S";
      console.log(arr[i]);
    } else if (arr[i] == "1") {
      // replace with I
      arr[i] = "I";
      console.log(arr[i]);
    }
  }

  return arr.join("");
}
