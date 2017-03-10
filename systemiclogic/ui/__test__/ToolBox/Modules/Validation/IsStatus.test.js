import IsStatus from '../../../../js/ToolBox/Modules/Validation/IsStatus';
import ValidationContextClass from '../../../../js/ToolBox/Modules/Validation/Context/ValidationContextClass';

//test

describe('Test IsStatus function',()=>{
    it('When no value',()=>{

        var ValidationInterfaceObject=new IsStatus();
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });


    it('When empty string value',()=>{

        var ValidationInterfaceObject=new IsStatus('               ');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });

    it('when 201 chars ',()=>{

        var ValidationInterfaceObject=new IsStatus('011111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111111112222222222333333333344444444445555555555');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(false);
    });


    it('when 1 char ',()=>{

        var ValidationInterfaceObject=new IsStatus('a');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });



    it('when 200 chars ',()=>{

        var ValidationInterfaceObject=new IsStatus('11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111111112222222222333333333344444444445555555555');
        var ContextObject= new ValidationContextClass(ValidationInterfaceObject);
        expect(ContextObject.StartValidation()).toBe(true);
    });




});