var $=require('jquery');
var php=require('phpjs');

export default class IsTelNumber{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);


        if(!php.ctype_digit(givenValue)||givenValue.length<5)
        {
            return false;
        }

        return true;

    }
}