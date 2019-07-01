const expect = require('chai').expect;
const PaymentPackage = require('../solution').PaymentPackage;

describe('PaymentPackage unit tests', () => {
    let pp = null;
    describe('constructor tests',() => {
        beforeEach(() => {
            pp = new PaymentPackage('naPesho', 35);
        });

        it('PaymentPackage shuld be object type!', () => {
            expect(pp).to.be.an('object');
        });

        it('PaymentPackage shuld have these properties', () => {
            let props = ['name', 'value', 'VAT', 'active'];
            props.every(p => expect(pp).to.have.property(p))
        });
    });

    beforeEach(() => {
        pp = new PaymentPackage('naGosho', 51);
    });

    describe('name property tests', () => {
        it('name property should get correctly', () => {
            const expected = 'naGosho';
            expect(pp.name).to.be.equal(expected);
        });

        it('name property should set correctly', () => {
            pp.name = 'vecheNaPesho';
            const expected = 'vecheNaPesho';
            expect(pp.name).to.be.be.equal(expected);
        });

        it('name property should throw error with name !== string', () => {
            expect(() => {pp.name = {}}).to.throw();
        });

        it('name property should throw error with name length === 0', () => {
            expect(() => {pp.name = ''}).to.throw();
        });
    });

    describe('value tests', () => {
        it('value property should get correctly', () => {
            const expected = 51;
            expect(pp.value).to.be.equal(expected);
        });

        it('value property should set correctly', () => {
            pp.value = 69;
            const expected = 69;
            expect(pp.value).to.be.be.equal(expected);
        });

        it('value property should work with 0!', () => {
            pp.value = 0;
            const expected = 0;
            expect(pp.value).to.be.be.equal(expected);
        });

        it('value property should throw error with value !== number', () => {
            expect(() => {pp.value = 'goshoooo'}).to.throw();
        });

        it('value property should throw error with value < 0', () => {
            expect(() => {pp.value = -5}).to.throw();
        });


    });

    describe('VAT tests', () => {
        it('VAT property should get correctly', () => {
            const expected = 20;
            expect(pp.VAT).to.be.equal(expected);
        });

        it('VAT property should set correctly', () => {
            pp.VAT = 80;
            const expected = 80;
            expect(pp.VAT).to.be.be.equal(expected);
        });

        it('VAT property should throw error with value !== number', () => {
            expect(() => {pp.VAT = []}).to.throw();
        });

        it('VAT property should throw error with value < 0', () => {
            expect(() => {pp.VAT = -5}).to.throw();
        });
    });

    describe('active tests', () => {
        it('active property should get correctly', () => {
            const expected = true;
            expect(pp.active).to.be.equal(expected);
        });

        it('active property should set correctly', () => {
            pp.active = false;
            const expected = false;
            expect(pp.active).to.be.be.equal(expected);
        });

        it('active property should throw error with value !== boolean', () => {
            expect(() => {pp.active = 12}).to.throw();
        });

    });
    
    describe('toString should work correctly', () => {
        it('toString should return string type', ()=> {
            expect(pp.toString()).to.be.an('string');
        }); 

        it('toString should return message', () => {
            const expeted = 'Package: naGosho\n- Value (excl. VAT): 51\n- Value (VAT 20%): 61.199999999999996';
            expect(pp.toString()).to.be.equal(expeted);
        });

        it('toString should return differnet message with active = false', () => {
            pp.active = false;
            const expeted = 'Package: naGosho (inactive)\n- Value (excl. VAT): 51\n- Value (VAT 20%): 61.199999999999996';
            expect(pp.toString()).to.be.equal(expeted);
        });
    });
});