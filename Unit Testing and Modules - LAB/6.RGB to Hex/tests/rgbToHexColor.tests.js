const { expect } = require('chai');
const { rgbToHexColor } = require('../solution');

describe('rgbToHexColor unit tests', () => {
    describe('valid tests', () => {
        it('rgbToHexColor(100, 100, 100) should return #646464', () => {
            const expected = '#646464';
            const actual = rgbToHexColor(100, 100, 100);

            expect(actual).to.be.equal(expected);
        });

        it('rgbToHexColor(255, 255, 255) should return #FFFFFF', () => {
            const expected = '#FFFFFF';
            const actual = rgbToHexColor(255, 255, 255);

            expect(actual).to.be.equal(expected);
        });

        it('rgbToHexColor(0, 0, 0) should return #000000', () => {
            const expected = '#000000';
            const actual = rgbToHexColor(0, 0, 0);

            expect(actual).to.be.equal(expected);
        });
    });
    describe('invalid tests', () => {
        it('rgbToHexColor(256, 5, 12) should return undefined', () => {
            const actual = rgbToHexColor(256, 5, 12);
            expect(actual).to.be.undefined;
        });

        it('rgbToHexColor(255, 2000, 12) should return undefined', () => {
            const actual = rgbToHexColor(255, 2000, 12);
            expect(actual).to.be.undefined;
        });

        it('rgbToHexColor(255, 20, 1200) should return undefined', () => {
            const actual = rgbToHexColor(255, 20, 1200);
            expect(actual).to.be.undefined;
        });

        it('rgbToHexColor(-10, 5, 12) should return undefined', () => {
            const actual = rgbToHexColor(-10, 5, 12);
            expect(actual).to.be.undefined;
        });
        
        it('rgbToHexColor(23, -200, 12) should return undefined', () => {
            const actual = rgbToHexColor(23, -200, 12);
            expect(actual).to.be.undefined;
        }); 
        
        it('rgbToHexColor(23, 200, -100) should return undefined', () => {
            const actual = rgbToHexColor(23, 200, -100);
            expect(actual).to.be.undefined;
        }); 

        it('rgbToHexColor(23.1, 200, 0) should return undefined', () => {
            const actual = rgbToHexColor(23.1, 200, 0);
            expect(actual).to.be.undefined;
        }); 

        it('rgbToHexColor(23, 200.01, 0) should return undefined', () => {
            const actual = rgbToHexColor(23, 200.01, 0);
            expect(actual).to.be.undefined;
        }); 

        it('rgbToHexColor(23, 200, 0.12) should return undefined', () => {
            const actual = rgbToHexColor(23, 200, 0.12);
            expect(actual).to.be.undefined;
        }); 
     });
});