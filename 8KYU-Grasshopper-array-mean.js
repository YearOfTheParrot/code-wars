// Find Mean
// Find the mean (average) of a list of numbers in an array.

// My solution

function findAverage(nums) {
    let sum = nums.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);
    
    return sum / nums.length;
}