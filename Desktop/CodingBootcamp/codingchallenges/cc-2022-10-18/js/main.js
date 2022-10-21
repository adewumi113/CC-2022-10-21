
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

//solution
function validatePIN (pin) {
//check for the conditions for which 'pin' length is false by using length property
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  //use for loop to loop through each index of 'pin' to make sure it is digit (0-9) and not negative
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
       return false;
    }

  }
  //if none of the conditions above holds, return true
  return true;
}