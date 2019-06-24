const expect = require('chai').expect;
const mathEnforcer = require('../solution').mathEnforcer;

describe('mathEnforcer tests', () => {
    describe('valid tests', () => {
        it('mathEnforcer.addFive(10) should return 15', () => {
            const expected = 15;
            const actual = mathEnforcer.addFive(10);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.addFive(-5) should return 0', () => {
            const expected = 0;
            const actual = mathEnforcer.addFive(-5);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.addFive(10.34) should return 15.34', () => {
            const expected = 15.34;
            const actual = mathEnforcer.addFive(10.34);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.addFive(-10.34) should return -5.34', () => {
            const expected = -5.34;
            const actual = mathEnforcer.addFive(-10.34);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.subtractTen(0) should return -10', () => {
            const expected = -10;
            const actual = mathEnforcer.subtractTen(0);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.subtractTen(10) should return 0', () => {
            const expected = 0;
            const actual = mathEnforcer.subtractTen(10);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.subtractTen(20.1) should return 10.1', () => {
            const expected = 10.1;
            const actual = mathEnforcer.subtractTen(20.1);
            expect(actual.toFixed(1)).to.be.equal(expected.toFixed(1));
        });

        it('mathEnforcer.subtractTen(-20.1) should return -30.1', () => {
            const expected = -30.1;
            const actual = mathEnforcer.subtractTen(-20.1);
            expect(actual.toFixed(1)).to.be.equal(expected.toFixed(1));
        });

        it('mathEnforcer.sum(1, 2) should return 3', () => {
            const expected = 3;
            const actual = mathEnforcer.sum(1, 2);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.sum(-1, -2) should return -3', () => {
            const expected = -3;
            const actual = mathEnforcer.sum(-1, -2);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.sum(10.6, 9.4) should return 20', () => {
            const expected = 20;
            const actual = mathEnforcer.sum(10.6, 9.4);
            expect(actual).to.be.equal(expected);
        });

        it('mathEnforcer.sum(-10.6, -9.4) should return -20', () => {
            const expected = -20;
            const actual = mathEnforcer.sum(-10.6, -9.4);
            expect(actual).to.be.equal(expected);
        });
        
    });

    describe('invalid tests', () => {
        it('mathEnforcer.addFive("pesho") should return undefined', () => {
            const actual = mathEnforcer.addFive('pesho');
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.addFive("5") should return undefined', () => {
            const actual = mathEnforcer.addFive('5');
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.subtractTen("gosho") should return undefined', () => {
            const actual = mathEnforcer.subtractTen("gosho");
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.subtractTen("5") should return undefined', () => {
            const actual = mathEnforcer.subtractTen("5");
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.sum("pesho", 1) should return undefined', () => {
            const actual = mathEnforcer.sum("pesho", 1);
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.sum(23, "ivan") should return undefined', () => {
            const actual = mathEnforcer.sum(23, "ivan");
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.sum(23) should return undefined', () => {
            const actual = mathEnforcer.sum(23);
            expect(actual).to.be.undefined;
        });

        it('mathEnforcer.sum() should return undefined', () => {
            const actual = mathEnforcer.sum();
            expect(actual).to.be.undefined;
        });

         it('mathEnforcer.sum({name: "pesho", age: 23}, {name: "Stoicho", age: 67}) should return undefined', () => {
            const actual = mathEnforcer.sum({name: "pesho", age: 23}, {name: "Stoicho", age: 67});
            expect(actual).to.be.undefined;
        });
    });
});