import IsTelNumber from '../../../../js/ToolBox/Modules/Validation/IsTelNumber';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

//test

describe('Check is IsTelnumber works.',()=>{

    it('Should be false when tel number is alpha and length smaller than 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('dddd');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is alpha and length bigger or equal to 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('ddddh');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is alpha-numeric - length smaller than 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('2f4f');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is alpha-numeric - length larger/equal to 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('2f4f6');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is float/double/decimal - length smaller than 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('88.2');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is float/double/decimal - length =/more 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('88.22');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('Should be false when tel number is float/double/decimal 2 - length smaller than 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('88,2');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is float/double/decimal 2 - length =/more 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('88,22');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });



    it('Should be false when tel number is - and length less than 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('-5');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is - and length =/more 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('-5000');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is + and length  less 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('+588');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when tel number is + and more/equal 5',()=>{

        var ValidationInterfaceObject=new IsTelNumber('+5943');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when no value is given',()=>{

        var ValidationInterfaceObject=new IsTelNumber();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when empty string given',()=>{

        var ValidationInterfaceObject=new IsTelNumber('');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Should be false when empty string given 2',()=>{

        var ValidationInterfaceObject=new IsTelNumber('     ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('Should be true - length and string correct',()=>{

        var ValidationInterfaceObject=new IsTelNumber('59433');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Contains spaces decimal',()=>{
       expect(new ValidationContextClass(new IsTelNumber('234 .23')).StartValidation()).toBe(false);
    });

    it('Contains spaces integer',()=>{
        expect(new ValidationContextClass(new IsTelNumber('234 23')).StartValidation()).toBe(false);
    });



});