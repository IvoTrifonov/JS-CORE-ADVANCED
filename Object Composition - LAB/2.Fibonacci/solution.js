function getFibonator() {
    let a = 1;
    let b = 1;
    
    return () => {
        let sum = a;
        a = b;
        b = a + sum;
        return sum;
    };
}

const fib = getFibonator();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
