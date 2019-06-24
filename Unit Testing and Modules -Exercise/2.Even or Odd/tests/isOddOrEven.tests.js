const  expect  = require('chai').expect;
const isOddOrEven = require('../solution').isOddOrEven;

describe('isOddOrEven() tests', () => {
    describe('valid tests', () => {
        it('isOddOrEven("pesho") should return odd', () => {
            const expected = 'odd';
            const actual = isOddOrEven('pesho');
            expect(actual).to.be.equal(expected);
        });

        it('isOddOrEven("ivan") should return even', () => {
            const expected = 'even';
            const actual = isOddOrEven('ivan');
            expect(actual).to.be.equal(expected);
        });

        it('isOddOrEven("ivan", "pesho", "gosho") should return even, taking only the first parameter', () => {
            const expected = 'even';
            const actual = isOddOrEven('ivan');
            expect(actual).to.be.equal(expected);
        });
    }); 
    
    describe('invalid tests', () => {
        it('isOddOrEven() should return undefined', () => {
            const actual = isOddOrEven();
            expect(actual).to.be.undefined;
        });

        it('isOddOrEven({name: "pesho", grade: 2.49}) should return undefined', () => {
            const actual = isOddOrEven({name: "pesho", grade: 2.49});
            expect(actual).to.be.undefined;
        });
    }); 
});