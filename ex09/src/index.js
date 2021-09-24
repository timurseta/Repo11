// Only change code below this line
function myBouncer(arr) {
    return arr = arr.filter(Boolean);
}
// Only change code above this line

console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
module.exports = myBouncer;