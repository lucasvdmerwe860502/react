import IsBlank from '../../../../js/ToolBox/Modules/Validation/IsBlank';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

describe('Test IsBlank function',()=>{
    it('No value given - true ',()=>{

        var ValidationInterfaceObject=new IsBlank();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Empty string - true',()=>{

        var ValidationInterfaceObject=new IsBlank('');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('Empty string - 2 - true',()=>{

        var ValidationInterfaceObject=new IsBlank('     ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('non-empty string - false',()=>{

        var ValidationInterfaceObject=new IsBlank('a');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


});