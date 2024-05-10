/*
problem:creating a function to make all letters into capital letters from a string 
solution:to identify small letters and replace with capital letters by using ASCII values
step1:creating a function with name replaceCapital
step2:add a for loop on the string
step3:return final string with all capital letters
*/

replaceCapital = function (str) {
    let output = "";
    for (i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
               val = str[i].charCodeAt()- 32;
                output += String.fromCharCode(val);
        }
          else{
            output +=str[i];
          }
    }
    return output;

}
let string="Leonardo started the iconic portrait around 1503 when he was living in Florence"
console.log(replaceCapital(string));

