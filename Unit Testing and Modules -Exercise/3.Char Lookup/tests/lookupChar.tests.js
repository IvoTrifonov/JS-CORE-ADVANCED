const expect = require('chai').expect;
const lookupChar = require('../solution').lookupChar;

describe('lookupChar() tests', () => {
    describe('valid tests', () => {
        it('lookupChar("pesho", 3) should return "h"', () => {
            const expected = 'h';
            const actial = lookupChar("pesho", 3);
            expect(actial).to.be.equal(expected);
        });

        it('lookupChar("ivan", 0) should return "i"', () => {
            const expected = 'i';
            const actial = lookupChar("ivan", 0);
            expect(actial).to.be.equal(expected);
        });

        it('lookupChar("peshoslav", 8) should return "v"', () => {
            const expected = 'v';
            const actial = lookupChar("peshoslav", 8);
            expect(actial).to.be.equal(expected);
        });
    });

    describe('invalid tests', () => {
        it('lookupChar({name: "pesho", age: 25}, 3) should return "undefined"', () => {
            const actial = lookupChar({name: "pesho", age: 25}, 3);
            expect(actial).to.be.undefined;
        });

        it('lookupChar("gosho", 3.14) should return "undefined"', () => {
            const actial = lookupChar("gosho", 3.14);
            expect(actial).to.be.undefined;
        });
        
        it('lookupChar("ivo", 3) should return "Incorrect index"', () => {
            const expected = 'Incorrect index';
            const actial = lookupChar("ivo", 3);
            expect(actial).to.be.equal(expected);
        });

        it('lookupChar("peshoslav", -1) should return "Incorrect index"', () => {
            const expected = 'Incorrect index';
            const actial = lookupChar("peshoslav", -1);
            expect(actial).to.be.equal(expected);
        });
    });
});