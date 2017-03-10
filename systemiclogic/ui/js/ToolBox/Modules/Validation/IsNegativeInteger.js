var $ = require('jquery');
var php = require('phpjs');

export default class IsNegativeInteger {

    constructor(value = '') {
        this.value = value;
    }

    executeValidation() {
        var givenValue;
        var intString;
        givenValue = String(this.value);
        givenValue = $.trim(givenValue);
        intString = php.str_replace('-', '', givenValue);


        if (givenValue.length === 1 && givenValue === '-') {
            return true;
        }

        if (
            givenValue.substr(0, 1) === '-' &&
            php.ctype_digit(intString) &&
            php.substr_count(givenValue, '-') === 1
        )
        {
            return true;
        }

        return false;
    }
}