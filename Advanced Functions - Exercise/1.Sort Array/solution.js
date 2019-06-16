function solve(values, sortType) {
    sortType === "asc" ? values = values.sort((a, b) => {
        return +a - +b;
    }) : values = values.sort((a, b) => {
        return +b - +a;
    });

    return values;
}

solve([14, 7, 17, 6, 8], 'asc');