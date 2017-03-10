var $=require('jquery');
var php=require('phpjs');

export default class IsPositiveInteger{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue;
        givenValue=String(this.value);
        givenValue=$.trim(givenValue);

        if(php.ctype_digit(givenValue))
        {
            return true;
        }

        return false;

    }
}