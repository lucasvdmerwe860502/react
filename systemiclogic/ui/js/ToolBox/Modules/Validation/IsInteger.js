var $=require('jquery');
var php=require('phpjs');

export default class IsInteger{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);

        if(givenValue.length===1&&givenValue==="+")
        {
            return true;
        }

        if(givenValue.length===1&&givenValue==="-")
        {
            return true;
        }

        if(givenValue.substr(0,1)==="+" && php.ctype_digit(givenValue.substr(1,givenValue.length-1)))
        {
            return true;
        }

        if(givenValue.substr(0,1)==="-" && php.ctype_digit(givenValue.substr(1,givenValue.length-1)))
        {
            return true;
        }

        if(php.ctype_digit(givenValue))
        {
            return true;
        }

        return false;

    }
}