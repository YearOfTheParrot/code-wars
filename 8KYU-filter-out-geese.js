// Write a function that takes a list of strings as an argument and returns a filtered list 
// containing the same elements but with the 'geese' removed.


// My solution

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};