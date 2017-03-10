var $=require('jquery');
var php=require('phpjs');

export default class IsAge{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);

        if(givenValue===null)
        {
            return false;
        }

        if(givenValue==='')
        {
            return false;
        }

        if(!php.ctype_digit(givenValue))
        {
            return false;
        }

        if(givenValue>100)
        {
            return false;
        }


        return true;

    }
}