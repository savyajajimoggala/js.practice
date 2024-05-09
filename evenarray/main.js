/*
problem:find a function which returns only even numbers from array
solution:need to identify an even numbers
step1:creating a function with name evenNumbers
step2:add a for loop to the array
step3:return final array with even numbers
step4:equating it with even numbers
*/

evenNumbers = function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }

    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(evenNumbers(arr));

