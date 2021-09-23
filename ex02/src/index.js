// Create a temps array here 
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line
    var sum = 0;
    var row = newTemps[0].length;
    var count = 0;
    var average = 0;

    for (var i = 0; i < newTemps.length; i++ ) {
        for (var j = 0; j < newTemps[i].length; j++ ) {
            sum += newTemps[i][j];
            count++;

            if (count === 4) {
                average = sum / row;
                averageDayTemp.push(average);
                sum = 0;
                count = 0;
            }
        }

    }

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;



