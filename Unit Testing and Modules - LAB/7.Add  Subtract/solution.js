function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

const calculator = createCalculator();
calculator.add('5')
console.log(calculator.get());

module.exports = { createCalculator };