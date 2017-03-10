import React, {Component} from 'react';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';
import IsNegativeDecimal from '../../../../js/ToolBox/Modules/Validation/IsNegativeDecimal';

describe('Test IsNegativeDecimal validation module', ()=> {


    it('Test with two fullstops - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('12.21.33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with two fullstops starting plus - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('+12.21.33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with two fullstops starting minus - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('-12.21.33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with two fullstops after each other - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('12..33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with two fullstops after each other with minus first - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('-12..33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with two fullstops after each other with plus first - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('+12..33')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test when NAN', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('fdsa213.234!@#')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test when undefined given', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal()).StartValidation();
        expect(result).toBe(false);
    });

    it('Test when empty value given', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('     ')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with spaces - integer string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('234 234')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test with spaces - decimal string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('234. 234')).StartValidation();
        expect(result).toBe(false);
    });


    it('Test just + string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('+')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test just - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('-')).StartValidation();
        expect(result).toBe(true);
    });

    it('Test  + decimal string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('+232.23')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test  + decimal var type', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(+23.23)).StartValidation();
        expect(result).toBe(false);
    });



    it('Test  - decimal string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('-232.23')).StartValidation();
        expect(result).toBe(true);
    });

    it('Test  - decimal var type', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(-23.23)).StartValidation();
        expect(result).toBe(true);
    });


    it('Test  + integer string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('+232')).StartValidation();
        expect(result).toBe(false);
    });

    it('Test  + integer var type', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(+23)).StartValidation();
        expect(result).toBe(false);
    });

    it('Test  - integer string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('-232')).StartValidation();
        expect(result).toBe(true);
    });

    it('Test  - integer var type', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(-23)).StartValidation();
        expect(result).toBe(true);
    });


    it('test as integer - string', ()=> {

        var result = new ValidationContextClass(new IsNegativeDecimal('12')).StartValidation();
        expect(result).toBe(false);
    });

    it('test with one fullstop - string', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal('12.33')).StartValidation();
        expect(result).toBe(false);
    });


    it('Test as number variable type integer', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(12)).StartValidation();
        expect(result).toBe(false);
    });

    it('Test as double/float variable type - one fullstop', ()=> {
        var result = new ValidationContextClass(new IsNegativeDecimal(12.22)).StartValidation();
        expect(result).toBe(false);
    });


});


