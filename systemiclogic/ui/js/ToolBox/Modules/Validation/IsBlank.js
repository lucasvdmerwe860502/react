var $=require('jquery');
var php=require('phpjs');

export default class IsBlank{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);

        if(givenValue===''||givenValue===undefined||php.is_null(givenValue))
        {
            return true;
        }

        return false;

    }
}