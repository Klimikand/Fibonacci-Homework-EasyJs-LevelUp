
// 3. // fib - Returns the nth Fibonacci number.

// Первое решение. На больших числах грузится очень долго.

// function fib(number) {
//     if (number <= 1) {
//         return number;
//     } else {
//         return fib(number - 1) + fib(number - 2);
//     }
// }

// const result = fib(10);

// console.log(result)





// Второе решение. Грузится быстро))

function fib(number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= number; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

let number = 20;
const result = fib(number);

console.log(`The ${number}th Fibonacci number is: ` + result)

// Проверка
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765