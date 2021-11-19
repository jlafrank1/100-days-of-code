// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let dict = {
    x: 0,
    o: 0,
  };

  const arr = str.split("");

  const x = /[xX]/;
  const o = /[oO]/;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(x)) {
      dict.x++;
    } else if (arr[i].match(o)) {
      dict.o++;
    }
  }
  return dict.x === dict.o ? true : false;
}

// --- simplified: ---

/*
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/
