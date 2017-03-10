import IsPositiveInteger from '../../../../js/ToolBox/Modules/Validation/IsPositiveInteger';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

describe('Testing IsPositiveInteger validation ',()=>{

    it('NAN undefined',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger()).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN empty string',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('     ')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('asdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN spaces',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('as df')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting +',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('+12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('-12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal with spaces',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('12 .12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal without spaces',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type ',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting +',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('+12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting + ',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(+12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('-12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting - ',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(-12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting plus',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('+1234sdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting minus',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('-1234sdf')).StartValidation();
        expect(result).toBe(false);
    });


    it('Just - as string',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('-')).StartValidation();
        expect(result).toBe(false);
    });

    it('Just + as string',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('+')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer as string',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('1234')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer var type',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(1234)).StartValidation();
        expect(result).toBe(true);
    });

    it('integer as string with starting +',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('+1234')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer var type with starting +',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(+1234)).StartValidation();
        expect(result).toBe(true);
    });

    it('integer as string with starting -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger('-1234')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer var type with starting -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(-1234)).StartValidation();
        expect(result).toBe(false);
    });

    it('Positive integer, trailing decimal of 0 -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(+5.0)).StartValidation();
        expect(result).toBe(true);
    });

    it('Positive integer, trailing decimal -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(+5.01)).StartValidation();
        expect(result).toBe(false);
    });

    it('Negative integer, trailing decimal -',()=>{
        var result=new ValidationContextClass(new IsPositiveInteger(-5.0)).StartValidation();
        expect(result).toBe(false);
    });
});