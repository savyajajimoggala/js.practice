strAscending = function (string) {
    let str=string.split(" ");
    for (i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[j].charCodeAt() > str[i].charCodeAt()) {
                result = str[i];
                str[i] = str[j];
                str[j] = result;
            }
        }
    }
    return str;
}
let str = "sunsets are proof that no matter what happens,every day can end beautifully";
console.log(strAscending(str));