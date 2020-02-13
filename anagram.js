
/* Function Description

This function checks if a given word is a anagram

An anagram is a formed by rearranging the letters of another word

***Sample Input***

Silent, Listen

*** Sample Output***

true

*/

const anagram = (firstString, secondString) => {
  const sortedString = str => str.toLowerCase().split('').sort().join('');
  return sortedString(firstString) === sortedString(secondString);
}

anagram("silent", "Listen"); // == true
