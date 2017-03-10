var InValidString = [
    {
        fieldType: 'text',
        fieldValue: '   ',
        errorMessage: ''
    }
];

var ValidString = [
    {
        fieldType: 'text',
        fieldValue: ' SomeName  ',
        errorMessage: ''
    }
];

/*---------------------------------------------------------------------------------------------------------------------*/

var InvalidTel = [
    {
        fieldType: 'telnmr',
        fieldValue: ' ',
        errorMessage: ''
    }
];

var ValidTel = [
    {
        fieldType: 'telnmr',
        fieldValue: 762223333,
        errorMessage: ''
    }
];


/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidDecimal = [
    {
        fieldType: 'decimal',
        fieldValue: '-+5.2',
        errorMessage: ''
    }
];

var ValidDecimal = [
    {
        fieldType: 'decimal',
        fieldValue: '+5.2',
        errorMessage: ''
    }
];


/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidInteger = [
    {
        fieldType: 'integer',
        fieldValue: '-+5',
        errorMessage: ''
    }
];

var ValidInteger = [
    {
        fieldType: 'integer',
        fieldValue: -5,
        errorMessage: ''
    }
];



/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidEmail = [
    {
        fieldType: 'email',
        fieldValue: '1@.c',
        errorMessage: ''
    }
];

var ValidEmail = [
    {
        fieldType: 'email',
        fieldValue: '1@t.co.za',
        errorMessage: ''
    }
];


/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidPositiveInteger = [
    {
        fieldType: 'positive_integer',
        fieldValue: -5,
        errorMessage: ''
    }
];

var InvalidPositiveInteger2 = [
    {
        fieldType: 'positive_integer',
        fieldValue: '5.01',
        errorMessage: ''
    }
];

var ValidPositiveInteger = [
    {
        fieldType: 'positive_integer',
        fieldValue: '5',
        errorMessage: ''
    }
];


var ValidPositiveInteger2 = [
    {
        fieldType: 'positive_integer',
        fieldValue: +5.0,
        errorMessage: ''
    }
];




/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidNegativeInteger = [
    {
        fieldType: 'negative_integer',
        fieldValue: +5,
        errorMessage: ''
    }
];

var InvalidNegativeInteger2 = [
    {
        fieldType: 'negative_integer',
        fieldValue: -5.01,
        errorMessage: ''
    }
];

var ValidNegativeInteger = [
    {
        fieldType: 'negative_integer',
        fieldValue: '-5',
        errorMessage: ''
    }
];

var ValidNegativeInteger2 = [
    {
        fieldType: 'negative_integer',
        fieldValue: -5.0,
        errorMessage: ''
    }
];





/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidPositiveDecimal = [
    {
        fieldType: 'positive_decimal',
        fieldValue: '+23.7fdsa',
        errorMessage: ''
    }
];

var InvalidPositiveDecimal2 = [
    {
        fieldType: 'positive_decimal',
        fieldValue: -5.01,
        errorMessage: ''
    }
];

var InvalidPositiveDecimalCheckPlus = [
    {
        fieldType: 'positive_decimal',
        fieldValue: '+5',
        errorMessage: ''
    }
];

var ValidPositiveDecimal2 = [
    {
        fieldType: 'positive_decimal',
        fieldValue: '5.3',
        errorMessage: ''
    }
];


/*-------------------------------------------------------------------------------------------------------------------*/

var InvalidNegativeDecimal = [
    {
        fieldType: 'negative_decimal',
        fieldValue: '-23.7fdsa',
        errorMessage: ''
    }
];

var InvalidNegativeDecimal2 = [
    {
        fieldType: 'negative_decimal',
        fieldValue: 5.01,
        errorMessage: ''
    }
];

var ValidNegativeDecimal = [
    {
        fieldType: 'negative_decimal',
        fieldValue: '-5.1',
        errorMessage: ''
    }
];

var ValidNegativeDecimal2 = [
    {
        fieldType: 'negative_decimal',
        fieldValue: -5.3,
        errorMessage: ''
    }
];






export
{
    InValidString,
    InvalidTel,
    InvalidDecimal,
    InvalidInteger,
    InvalidEmail,
    InvalidPositiveInteger,
    InvalidPositiveInteger2,
    InvalidNegativeInteger,
    InvalidNegativeInteger2,
    InvalidPositiveDecimal,
    InvalidPositiveDecimal2,
    InvalidNegativeDecimal,
    InvalidNegativeDecimal2,
    ValidString,
    ValidTel,
    ValidDecimal,
    ValidInteger,
    ValidEmail,
    ValidPositiveInteger,
    ValidPositiveInteger2,
    ValidNegativeInteger,
    ValidNegativeInteger2,
    InvalidPositiveDecimalCheckPlus,
    ValidPositiveDecimal2,
    ValidNegativeDecimal,
    ValidNegativeDecimal2
};