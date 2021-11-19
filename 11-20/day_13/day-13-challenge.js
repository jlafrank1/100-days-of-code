// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// a helpful regex tester: https://www.regextester.com/113122

function validatePIN(pin) {
  // input: string
  // return true or false

  // must be four or six digits, numbers /[0-9]/
  const numbers = /^\d{4}$|^\d{6}$/g;

  return pin.match(numbers) ? true : false;
}
