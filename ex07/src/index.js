// Only change code below this line
function largestNumFromArr(arr) {
    var maxNumArray = [];

    for (var i = 0; i < arr.length; i++) {
        maxNumArray.push(Math.max(...arr[i]))
      }
      return maxNumArray;
    }    
// Only change code above this line

console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
module.exports = largestNumFromArr;