// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//solution 
function highAndLow (str){
    let q = str.split(' ').sort((a, b) => b-a) //here we split the string to turn it to array and then we sort the array to descending order.
     return `${q[0]} ${q[q.length - 1]}` //we use template literal to return the value of first and last index i.e maximum and minimum number in the array.
 }