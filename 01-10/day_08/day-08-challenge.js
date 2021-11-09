// write a name match functionn that compares a name to an array of aliases. the aliases are missing middle name.

// input:
// 1. array of aliases
// 2. name

// goal:
// if name matches something in the array, return true
// AKA if first name and last name of name match an item in the array's first name and last name, return true
// if first name == first name && last name == last name return true

// in order to compare first name to first name and last name to last name, i need to split each string into an array
// for example:
// splitAliases = [
//   [first name, last name],
//   [first name, last name],
//   [first name, last name]
// ]

// then i can loop through each index of split alises and compare fist name to first name and last name to last name
// AKA splitAliases[0][0] and name[0]

const nameMatch = (aliases, name) => {
  // input:
  // 1) alias (array)
  // 2) name (string)

  // console.log("alias > ", alias)
  // console.log("name > ", name)

  // isolate first and last name from alias (array)
  // isolate first and last name from name (string)
  // compare first and first, and last and last
  // if both match, return true
  // else return false

  const parsedName = name.split(" ");
  console.log("parsed Name > ", parsedName);

  // need to perform split() on each item in the array because .split is a string method
  // const parsedAlias = alias.forEach(el => console.log("parsedAlias > ", el.split(" ")))
  // forEach always returns undefined, so use a diff method

  const parsedAlias = alias.map((el) => el.split(" "));
  console.log("parsed Alias > ", parsedAlias);

  console.log();

  const fName = parsedName[0];
  console.log("first name > ", fName);

  const lName = parsedName[parsedName.length - 1];
  console.log("last name > ", lName);

  console.log();

  const aliasFName = parsedAlias[0][0];
  console.log("alias f name > ", aliasFName);

  const aliasLName = parsedAlias[0][1];
  console.log("alias l name > ", aliasLName);

  console.log();

  // return (fName === aliasFName && lName === aliasLName ? true : false)

  if (fName === aliasFName && lName === aliasLName) {
    console.log("match!");
    return true;
  } else {
    console.log("No match");
    return false;
  }
};
