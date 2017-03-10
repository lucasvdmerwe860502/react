import IsInteger from '../../../../js/ToolBox/Modules/Validation/IsInteger';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

describe('Testing IsInteger validation ',()=>{

    it('NAN undefined',()=>{
        var result=new ValidationContextClass(new IsInteger()).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN empty string',()=>{
        var result=new ValidationContextClass(new IsInteger('     ')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN',()=>{
        var result=new ValidationContextClass(new IsInteger('asdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NAN spaces',()=>{
        var result=new ValidationContextClass(new IsInteger('as df')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces',()=>{
        var result=new ValidationContextClass(new IsInteger('12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting +',()=>{
        var result=new ValidationContextClass(new IsInteger('+12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string integer with spaces starting -',()=>{
        var result=new ValidationContextClass(new IsInteger('-12 12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal with spaces',()=>{
        var result=new ValidationContextClass(new IsInteger('12 .12')).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal without spaces',()=>{
        var result=new ValidationContextClass(new IsInteger('12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type ',()=>{
        var result=new ValidationContextClass(new IsInteger(12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting +',()=>{
        var result=new ValidationContextClass(new IsInteger('+12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting + ',()=>{
        var result=new ValidationContextClass(new IsInteger(+12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('string decimal starting -',()=>{
        var result=new ValidationContextClass(new IsInteger('-12.12')).StartValidation();
        expect(result).toBe(false);
    });

    it('decimal var type starting - ',()=>{
        var result=new ValidationContextClass(new IsInteger(-12.12)).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting plus',()=>{
        var result=new ValidationContextClass(new IsInteger('+1234sdf')).StartValidation();
        expect(result).toBe(false);
    });

    it('NaN with starting minus',()=>{
        var result=new ValidationContextClass(new IsInteger('-1234sdf')).StartValidation();
        expect(result).toBe(false);
    });


    it('Just - as string',()=>{
        var result=new ValidationContextClass(new IsInteger('-')).StartValidation();
        expect(result).toBe(true);
    });

    it('Just + as string',()=>{
        var result=new ValidationContextClass(new IsInteger('+')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer as string',()=>{
        var result=new ValidationContextClass(new IsInteger('1234')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer var type',()=>{
        var result=new ValidationContextClass(new IsInteger(1234)).StartValidation();
        expect(result).toBe(true);
    });

    it('integer as string with starting +',()=>{
        var result=new ValidationContextClass(new IsInteger('+1234')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer var type with starting +',()=>{
        var result=new ValidationContextClass(new IsInteger(+1234)).StartValidation();
        expect(result).toBe(true);
    });

    it('integer as string with starting -',()=>{
        var result=new ValidationContextClass(new IsInteger('-1234')).StartValidation();
        expect(result).toBe(true);
    });

    it('integer var type with starting -',()=>{
        var result=new ValidationContextClass(new IsInteger(-1234)).StartValidation();
        expect(result).toBe(true);
    });
});