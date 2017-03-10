import IsAge from '../../../../js/ToolBox/Modules/Validation/IsAge';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

//test

describe('Test IsAge function',()=>{
    it('When not an integer - null',()=>{

        var ValidationInterfaceObject=new IsAge();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - empty string 1',()=>{

        var ValidationInterfaceObject=new IsAge('');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - empty string 2',()=>{

        var ValidationInterfaceObject=new IsAge('          ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - alpha',()=>{

        var ValidationInterfaceObject=new IsAge('abcdefg');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - alpha-numeric',()=>{

        var ValidationInterfaceObject=new IsAge('ab2332');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - decimal with full stop',()=>{

        var ValidationInterfaceObject=new IsAge('111.111');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - decimal with comma',()=>{

        var ValidationInterfaceObject=new IsAge('111,111');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - with +',()=>{

        var ValidationInterfaceObject=new IsAge('+1111');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('When not an integer - not a number - with -',()=>{

        var ValidationInterfaceObject=new IsAge('-1111');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('Less than 18',()=>{

        var ValidationInterfaceObject=new IsAge(17);
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Greater than 100',()=>{

        var ValidationInterfaceObject=new IsAge(101);
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('Greater than 18',()=>{

        var ValidationInterfaceObject=new IsAge(19);
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Less than 100',()=>{

        var ValidationInterfaceObject=new IsAge(99);
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('With spaces integer string',()=>{
       var result=new ValidationContextClass(new IsAge('34 234')).StartValidation();
        expect(result).toBe(false);
    });

    it('With spaces decimal string',()=>{
        var result=new ValidationContextClass(new IsAge('34 .234')).StartValidation();
        expect(result).toBe(false);
    });











});