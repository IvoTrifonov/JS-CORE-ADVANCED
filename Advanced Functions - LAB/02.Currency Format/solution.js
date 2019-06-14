function solve(number) {
    function currencyFormatter(separator, symbol, symbolFirst, amount) {
        let result = Math.trunc(amount) + separator;
        result += amount.toFixed(2).substr(-2,2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }
    
    function getDollarFormater(formatter) {
        return function (value) {
            return formatter(",", "$", true, value);
        }; 
    }
    
    const dollarFormatter = getDollarFormater(currencyFormatter);
    console.log(dollarFormatter(number));
}

solve(100);




