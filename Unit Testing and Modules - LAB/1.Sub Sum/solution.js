function sum(inputNumbers, startIndex, endIndex) {
    if (!Array.isArray(inputNumbers)) {
        return NaN;
    }

    if (inputNumbers.filter(x => !Number(x)).length > 0) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= inputNumbers.length) {
        endIndex = inputNumbers.length - 1;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += inputNumbers[i];
    }

    return sum;
}

sum([10, 20, 30, 40, 50, 60], 3, 300);