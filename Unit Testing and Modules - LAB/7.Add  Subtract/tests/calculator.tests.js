const { expect } = require('chai');
const { createCalculator } = require('../solution');
 
describe('createCalculator() tests', () => {
    describe('valid tests', () => {
        it('createCalculator() should return object', () => {
            const expected = 'object';
            const actual = typeof createCalculator();
    
            expect(actual).to.be.equal(expected);
        });
    
        it('createCalculator().add(5) should return 5', () => {
            const calculator = createCalculator();
            calculator.add(5);
            const expected = 5;
            const actual = calculator.get();
            expect(actual).to.be.equal(expected);
        });
    
        it('createCalculator().suntract(5) should return -5', () => {
            const calculator = createCalculator();
            calculator.subtract(5);
            const expected = -5;
            const actual = calculator.get();
            expect(actual).to.be.equal(expected);
        });
    });
    
    describe('invalid tests', () => {
        it('createCalculator().add("pesho") should return NaN', () => {
            const calculator = createCalculator();
            calculator.add('pesho');
            const actual = calculator.get();
    
            expect(actual).to.be.NaN;
        });
    
        it('createCalculator().subtract("GOSHO") should return NaN', () => {
            const calculator = createCalculator();
            calculator.subtract('GOSHO');
            const actual = calculator.get();
    
            expect(actual).to.be.NaN;
        });
        
        it('createCalculator().add("5") should return 5', () => {
            const calculator = createCalculator();
            calculator.add('5');
            const expected = 5;
            const actual = calculator.get();
    
            expect(actual).to.be.equal(expected);
        });

        it('createCalculator().subtract("100.2515") should return 5', () => {
            const calculator = createCalculator();
            calculator.add('100.2515');
            const expected = 100.2515;
            const actual = calculator.get();
    
            expect(actual).to.be.equal(expected);
        });
    });
});