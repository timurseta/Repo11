// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result = [];

    for (var i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    result = result.splice(2, n);
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;