// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // this solution did not return 0, because 0 is falsey:
  //   return l.filter(el => typeof(el) == 'number' ? el : false)

  // so i decided to spell it out more clearly, which passed all tests:
  newArr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      newArr.push(l[i]);
    }
  }
  return newArr;
}

// this solution would also work, because you pass in a callback function:
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }
