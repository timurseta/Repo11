// Only change code below this line
function myMutation(arr) {
    var arr1=arr[0].toLowerCase().split("");
    var arr2=arr[1].toLowerCase().split("");
    if(arr1.length<arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if(arr2.indexOf(arr1[i]) == -1) {
                return false;
            }
        }
    }   else if(arr1.length>=arr2.length ) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1.indexOf(arr2[j]) == -1) {
                return false;
            }
        }
    }
    return true;
}
// Only change code above this line

console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;