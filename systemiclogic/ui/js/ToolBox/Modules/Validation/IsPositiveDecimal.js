var $=require('jquery');
var php=require('phpjs');

export default class IsPositiveDecimal{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);
        var givenValueArray=givenValue.split('.');
        var stringFromArray='';

        $(givenValueArray).each(function(index,element){

            stringFromArray+=element;
        });


        if(php.substr_count(String(givenValue),'+')>0 || php.substr_count(String(givenValue),'-')>0)
        {
            return false;
        }


        if(php.substr_count(givenValue,'.')>1 || givenValue.substr(0,1)===".")
        {
            return false;
        }


        if(!php.ctype_digit(stringFromArray)||givenValue===''||givenValueArray.length>2||php.substr_count(givenValue,' ')>0)
        {
            return false;
        }

        return true;

    }
}