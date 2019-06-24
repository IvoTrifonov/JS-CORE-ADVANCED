const { expect } = require('chai');
const { isSymmetric } = require('../solution');

describe('isSymmetric tests', () => {
    describe('valid tests', () => {
        it('isSymmetric([2, 1, 1, 2]) should be true', () => {
            const actual = isSymmetric([2, 1, 1, 2]);
            expect(actual).to.be.true;
        });

        it('isSymmetric(["pesho"]) should be true', () => {
            const actual = isSymmetric(["pesho"]);
            expect(actual).to.be.true;
        });

        it('isSymmetric(["pesho", "gosho"]) should be false', () => {
            const actual = isSymmetric(["pesho", "gosho"]);
            expect(actual).to.be.false;
        });

        it('isSymmetric("vesel") should be false', () => {
            const actual = isSymmetric("vesel");
            expect(actual).to.be.false;
        });

        it('isSymmetric(3.14159265359) should be false', () => {
            const actual = isSymmetric(3.14159265359);
            expect(actual).to.be.false;
        });

        it('isSymmetric([]) should be true', () => {
            const actual = isSymmetric([]);
            expect(actual).to.be.true;
        });

        it('isSymmetric([[], {}, []]) should be true', () => {
            const actual = isSymmetric([[], {}, []]);
            expect(actual).to.be.true;
        });

        it('isSymmetric([[], {}, [], {}, {}]) should be false', () => {
            const actual = isSymmetric([[], {}, [], {}, {}]);
            expect(actual).to.be.false;
        });
    });
});