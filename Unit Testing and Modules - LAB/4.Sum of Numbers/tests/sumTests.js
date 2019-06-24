const  { expect } = require('chai');
let { sum } = require('../solution.js');

describe('sum tests', () => {
    describe('valid tests', () => {
        it('sum([2, 1]) should be equal to 3', () => {
            const expected = 3;
            const actual = sum([2, 1]);
        
            expect(actual).to.be.equal(expected);
        });
        
        it('sum([-3, -2]) should be equal to -5', () => {
            const expected = -5;
            const actual = sum([-3, -2]);
        
            expect(actual).to.be.equal(expected);
        });
    });
    describe('invalid tests', () => {
        it('sum(["pesho", -2]) should be equal to NaN', () => {
            const actual = sum(["pesho", -2]);
            expect(actual).to.be.NaN;
        });
    });
});


