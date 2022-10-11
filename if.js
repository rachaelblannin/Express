const factorial = (n) => {
    let number = n;
    let start = 1;
    while (number > 1){
        start++
        if (number%start !== 0){
            return "none"
        } else {
            number = number/start
        }
    }
    return start
}

console.log(factorial(150));

module.exports = factorial;