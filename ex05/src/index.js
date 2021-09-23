// Only change code below this line
var myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr) {
    var newArray = ["Milka", 3];
    myNestedArray.push(newArray);
    return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;