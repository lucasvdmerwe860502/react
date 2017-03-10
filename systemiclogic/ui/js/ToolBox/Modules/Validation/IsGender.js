var $=require('jquery');
var php=require('phpjs');

export default class IsGender{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);
        var testValue=givenValue.toLowerCase();

        if(testValue==='female'||testValue==='male')
        {
            return true;
        }

        return false;

    }
}