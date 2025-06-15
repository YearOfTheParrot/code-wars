// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution

function findShort(str) {
  const words = str.split(" ");
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }

  return shortestWord.length;
}