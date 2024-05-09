/*
Problem: Finding vowels in a given string
Solution: need to identify a,e,i,o,u
Step1 : creating function with name findVowels
Step2: return final string with vowels
Step3: add a for loop on the string
Step4: equate it wth charcode of a(97),e(101),i(105),o(111),u(117) or A(65),E(69),I(73),O(79),U(85)

*/
/* mistakes made
line 19 open braces was wrong- put square braces
line 15 not square braces mention ("") because it was a string
put return statement after the for loop
*/

findVowels = function (c) {
    let output = "";
    for (i = 0; i < c.length; i++) {
        if (c.charCodeAt(i) == 97 || c.charCodeAt(i) == 101 || c.charCodeAt(i) == 105 || c.charCodeAt(i) == 111 || c.charCodeAt(i) == 117 ||
            c.charCodeAt(i) == 65 || c.charCodeAt(i) == 69 || c.charCodeAt(i) == 73 || c.charCodeAt(i) == 79 || c.charCodeAt(i) == 85
        ) {
            output = output + c[i];
        }
    }
    return output;
}
let str = "WE are learning javascript";
let output = findVowels(str);
console.log(findVowels(str));



