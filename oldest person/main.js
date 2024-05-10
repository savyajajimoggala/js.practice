/*
problem:creating a function to find the oldest person in the group
solution:
step1:creating a function with name oldestPerson
step2:add a for loop on the array
step3:return final array with oldest person in a group
*/

oldestPerson = function (arr) {
   let older = [];
    for (i = 0; i < arr.length; i++) {
  if (arr[i] > older) {
        older=arr[i];
        }
    }
    return older;
}
let arr = [{ name: 'cinni', age: 19}, { name: 'chitti', age: 40 }, { name: 'sameera', age: 21 }]
console.log(oldestPerson(arr));



