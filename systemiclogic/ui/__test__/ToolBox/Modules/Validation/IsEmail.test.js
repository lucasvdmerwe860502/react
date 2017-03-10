import IsEmail from '../../../../js/ToolBox/Modules/Validation/IsEmail';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

describe('Test IsEmail function',()=>{
    it('No value given - false',()=>{

        var ValidationInterfaceObject=new IsEmail();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('Empty string - false',()=>{

        var ValidationInterfaceObject=new IsEmail('');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('Empty string 2 - false',()=>{

        var ValidationInterfaceObject=new IsEmail('                ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('no @ - false',()=>{

        var ValidationInterfaceObject=new IsEmail(' test.co.za ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('no . - false',()=>{

        var ValidationInterfaceObject=new IsEmail(' 1@testing ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('less than 5 in length - false',()=>{

        var ValidationInterfaceObject=new IsEmail(' 1@.c ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

    it('contains spaces',()=>{
        expect(new ValidationContextClass(new IsEmail('fdsa 234fjdsklas kfdj @f.co')).StartValidation()).toBe(false);
    });


    it('correct - true',()=>{

        var ValidationInterfaceObject=new IsEmail(' 1@gmail.co.za ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Check with more than one @ sign',()=>{
        expect(new ValidationContextClass(new IsEmail('123@@fdsa.co.za')).StartValidation()).toBe(false);
    });



});