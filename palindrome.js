
/* Function Description

This function checks if a given word is a palindrome

A palindrome is a word reads the same backwards as forwards

***Sample Input***

rcecar

*** Sample Output***

true

*/
const palindrome = word => {

  const splitLength = word.split('').length;
  let reverseWord = '';

  for (let i = splitLength-1; i >=0; i--){
    reverseWord += word.split('')[i];
  }
  return word === reverseWord;
} 

palindrome('deifieds')  // === true
palindrome('Listen')  /// == false