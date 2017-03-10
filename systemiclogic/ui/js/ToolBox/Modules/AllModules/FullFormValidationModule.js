var $=require('jquery');
import ValidationContextClass from '../Validation/Context/ValidationContextClass';
import IsDecimal from '../Validation/IsDecimal';
import IsPositiveDecimal from '../Validation/IsPositiveDecimal';
import IsNegativeDecimal from '../Validation/IsNegativeDecimal';
import IsEmail from '../Validation/IsEmail';
import IsInteger from '../Validation/IsInteger';
import IsPositiveInteger from '../Validation/IsPositiveInteger';
import IsNegativeInteger from '../Validation/IsNegativeInteger';
import IsTelNumber from '../Validation/IsTelNumber';
import IsBlank from '../Validation/IsBlank';

export default class FullFormValidationModule{

    static runValidator(FieldsToCheckObject,Callbacks=null,AdditionalInfoForSuccessCallback=null)
    {
        var validity;
        var validityArray=[];
        var fullErrorMessage='';

        $(FieldsToCheckObject).each(function(index,element)
        {
            switch(element.fieldType)
            {
                case 'text':
                    if(new ValidationContextClass(new IsBlank(element.fieldValue)).StartValidation())
                    {
                        validity=false;
                    }
                    else
                    {
                        validity=true;
                    }
                    break;
                case 'telnmr':
                    validity=new ValidationContextClass(new IsTelNumber(element.fieldValue)).StartValidation();
                    break;
                case 'decimal':
                    validity=new ValidationContextClass(new IsDecimal(element.fieldValue)).StartValidation();
                    break;
                case 'positive_decimal':
                    validity=new ValidationContextClass(new IsPositiveDecimal(element.fieldValue)).StartValidation();
                    break;
                case 'negative_decimal':
                    validity=new ValidationContextClass(new IsNegativeDecimal(element.fieldValue)).StartValidation();
                    break;
                case 'integer':
                    validity=new ValidationContextClass(new IsInteger(element.fieldValue)).StartValidation();
                    break;
                case 'positive_integer':
                    validity=new ValidationContextClass(new IsPositiveInteger(element.fieldValue)).StartValidation();
                    break;
                case 'negative_integer':
                    validity=new ValidationContextClass(new IsNegativeInteger(element.fieldValue)).StartValidation();
                    break;
                case 'email':
                    validity=new ValidationContextClass(new IsEmail(element.fieldValue)).StartValidation();
                    break;
                default:
                    console.error("To the developer. Please check your script. Please remember to pass a fieldType to the FullFormValidation.runValidator() method");
                    break;
            }

            validityArray.push(validity);

            if(validity===false)
            {
                fullErrorMessage+=element.errorMessage+'<hr style="margin:3px;padding:3px;border-width:0px"/>';
            }
        });

        var filteredArray=validityArray.filter(function(validityInArray)
        {
            return validityInArray!==true;
        });

        var ValidationResult=(filteredArray.length===0) ? true : false;

        if(!ValidationResult&&Callbacks!==null)
        {
            if(Callbacks!==null)
            {
                Callbacks.Fail(fullErrorMessage);
            }

        }

        if(ValidationResult&&Callbacks!==null)
        {
            if(Callbacks!==null)
            {
                if(AdditionalInfoForSuccessCallback===null)
                {
                    Callbacks.Pass();
                }
                else
                {
                    Callbacks.Pass(AdditionalInfoForSuccessCallback);
                }

            }

        }

        return ValidationResult;

    }
}
