











factorial=function(num) {
    let ans = 1;
    if (num === 0) {
        return 1;
    }
    for (let i = 2; i <= num; i++) {
        ans = ans * i;
    }
    return ans;
}
let n = 7;
 console.log(factorial(n));



