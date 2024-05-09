/*
problem:creating a function to remove white space and special characters from a string
solution:to identify and remove special charactersin a string
step1:creating a function with name removeSplChar
step2:add a for loop on the string
step3:return final string without special characters and white space
*/

removeSplChar=function(str1) {
    let output="";
    for(i=0; i<str1.length; i++) {
        if ((str1.charCodeAt(i) >= 33 && str1.charCodeAt(i) <= 47) || (str1.charCodeAt(i) >= 58 && str1.charCodeAt(i) <= 64) || (str1.charCodeAt(i) >= 91 && str1.charCodeAt(i) <= 96) || (str1.charCodeAt(i) >= 123 && str1.charCodeAt(i) <= 126)||(str1.charCodeAt(i) == 32)) {
        }
          else {
            output= output+ str1[i];
        }
    }
    return output;
}
let str1 ="You must write ' \\ ' to put one backslash in the string ";
 console.log(removeSplChar(str1));

