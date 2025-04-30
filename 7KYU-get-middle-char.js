
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


// My solution


function getMiddle(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);
    if (length % 2 === 1) {
      return str.charAt(middleIndex);
    } else {
      return str.slice(middleIndex - 1, middleIndex + 1);
    }
  
  }