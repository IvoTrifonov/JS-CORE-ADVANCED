function solve(array) {
    function aggregate(array) {
        console.log("Sum =", array.reduce((a, b) => a + b, 0));
        console.log("Min =", array.reduce((a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER));
        console.log("Min =", array.reduce((a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER));
        console.log("Product =", array.reduce( (a, b) => a * b, 1));
        console.log("Join =", array.reduce((a, b) => `${a}${b}`, ""));
    }

    aggregate(array);
}

solve([2, 3, 10, 5]);
