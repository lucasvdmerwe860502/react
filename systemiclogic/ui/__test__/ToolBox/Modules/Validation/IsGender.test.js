import IsGender from '../../../../js/ToolBox/Modules/Validation/IsGender';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

//test

describe('Test IsGender function',()=>{
    it('MALE value test',()=>{

        var ValidationInterfaceObject=new IsGender('MALE');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('FEMALE value test',()=>{

        var ValidationInterfaceObject=new IsGender('FeMALE');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('other value test',()=>{

        var ValidationInterfaceObject=new IsGender('some fake gender');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('No value',()=>{

        var ValidationInterfaceObject=new IsGender();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('empty string value test',()=>{

        var ValidationInterfaceObject=new IsGender('             ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });

});