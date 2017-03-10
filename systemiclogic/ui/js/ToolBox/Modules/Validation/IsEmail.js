var $=require('jquery');

export default class IsEmail{

    constructor(value=''){
        this.value=value;
    }

    executeValidation()
    {
        var givenValue=$.trim(this.value);

        if(givenValue==='')
        {
            return false;
        }

        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return pattern.test(givenValue);

        /*


        if(php.substr_count(givenValue,'.')===0||givenValue.length<5||php.substr_count(givenValue,' ')>0)
        {
            return false;
        }

        if(php.substr_count(givenValue,'@')===0||php.substr_count(givenValue,'@')>1)
        {
            return false;
        }



        return true;

        */

    }
}