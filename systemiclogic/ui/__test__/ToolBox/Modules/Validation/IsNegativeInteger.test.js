import IsNegativeInteger from '../../../../js/ToolBox/Modules/Validation/IsNegativeInteger';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

describe('Testing IsNegativeInteger validation ',()=>{

    it('NAN undefined',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger()).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN empty string',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('     ')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('asdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN spaces',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('as df')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting +',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('+12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting -',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('-12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal with spaces',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('12 .12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal without spaces',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type ',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting +',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('+12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting + ',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(+12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting -',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('-12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting - ',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(-12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting plus',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('+1234sdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting minus',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('-1234sdf')).StartValidation();
        expect(result).toBe(false);
    });


    it('Just - as string',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('-')).StartValidation();
        expect(result).toBe(true);
    });

    it('Just + as string',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('+')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer as string',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('1234')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer var type',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(1234)).StartValidation();
        expect(result).toBe(false);
    });

    it('integer as string with starting +',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('+1234')).StartValidation();
        expect(result).toBe(false);
    });

    it('integer var type with starting +',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(+1234)).StartValidation();
        expect(result).toBe(false);
    });

    it('integer as string with starting -',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger('-1234')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer var type with starting -',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(-1234)).StartValidation();
        expect(result).toBe(true);
    });



    it('Positive integer with trailing decimal',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(+1234.0)).StartValidation();
        expect(result).toBe(false);
    });


    it('Negative integer with trailing decimal',()=>{
        var result=new ValidationContextClass(new IsNegativeInteger(-1234.01)).StartValidation();
        expect(result).toBe(false);
    });



});