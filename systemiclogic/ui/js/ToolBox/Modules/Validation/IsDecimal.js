var $=require('jquery');
var php=require('phpjs');

export default class IsDecimal{

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

        if(php.substr_count(givenValue,'.')>1)
        {
            return false;
        }

        if(givenValue.length===1&&givenValue==="+")
        {
            return true;
        }

        if(givenValue.length===1&&givenValue==="-")
        {
            return true;
        }


        if(givenValue.substr(0,1)==="+"&&php.ctype_digit(stringFromArray.substr(1,stringFromArray.length-1)))
        {
            return true;
        }


        if(givenValue.substr(0,1)==="-"&&php.ctype_digit(stringFromArray.substr(1,stringFromArray.length-1)))
        {
            return true;
        }


        if(!php.ctype_digit(stringFromArray)||givenValue===''||givenValueArray.length>2||php.substr_count(givenValue,' ')>0)
        {
            return false;
        }

        return true;

    }
}