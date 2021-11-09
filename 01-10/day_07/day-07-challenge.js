// write a function to find an exact match given an array of aliases and a name on record.

// input:
// 1) an array
// 2) a name on record

// goal: does the name on record match something in the array of aliases?
// if yes, return True
// if no, return False

// javascript built in array method .includes() returns a true of false value, and takes in an argument to match in an array

const nameMatch = (aliases, name) => {
  console.log(aliases.includes(name));
};
