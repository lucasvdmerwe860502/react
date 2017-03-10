var $ = require('jquery');
var php = require('phpjs');

export default class IsNegativeDecimal {

    constructor(value = '') {
        this.value = value;
    }

    executeValidation() {
        var IntString;
        var givenValue;

        givenValue = String(this.value);
        givenValue = $.trim(givenValue);
        IntString = php.str_replace('.', '', givenValue);
        IntString = php.str_replace('-', '', IntString);

        if(givenValue.substr(0,2)==='-.')
        {
            return false;
        }

        if (
            givenValue === '' ||
            php.substr_count(givenValue, ' ') > 0 ||
            php.substr_count(givenValue, '+') > 0 ||
            php.substr_count(givenValue, '.') > 1 ||
            php.substr_count(givenValue, '-') > 1
        ) {
            return false;
        }

        if (
            php.substr_count(givenValue, '-') === 1 &&
            (php.ctype_digit(IntString) || IntString === '') &&
            givenValue.substr(0, 1) === '-'
        ) {
            return true;
        }

        return false;
    }
}