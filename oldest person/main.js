/*
problem:creating a function to find the oldest person in the group
solution:
step1:creating a function with name oldestPerson
step2:add a for loop on the array
step3:return final array with oldest person in a group
*/

oldestPerson = function (people) {
    let max=people;
    for (i = 0; i < max.length; i++) {

        if (people[i] > max.length) {
            max= people[i];
        }
    }
    return max;
}
let people = [{ name: 'linyi', age: 19}, { name: 'teayung', age: 40 }, { name: 'kim', age: 21 }]
console.log(oldestPerson(people));



