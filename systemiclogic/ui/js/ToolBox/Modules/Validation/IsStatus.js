var $=require('jquery');
var php=require('phpjs');

export default class IsStatus{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);

        if(givenValue.length>200)
        {
            return false;
        }

        return true;
    }
}