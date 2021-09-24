// Only change code below this line
function mySplice(arr1, arr2, n){
    arr2.splice(n, 0, ...arr1.reverse());
    return arr2;
}
// Only change code above this line

console.log(mySplice(["Dell", "Phillips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;