import {
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
} from '../../../MockObjects/FullFormValidation/ValidationMocks';
import {
    FullFormValidation
} from '../../../../js/ToolBox/Modules/ModuleList';

describe('Test full form validation.',()=>{
    it('Text field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InValidString)).toBe(false);
        expect(FullFormValidation.runValidator(ValidString)).toBe(true);
    });

    it('Telnmr field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidTel)).toBe(false);
        expect(FullFormValidation.runValidator(ValidTel)).toBe(true);
    });

    it('Decimal field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidDecimal)).toBe(false);
        expect(FullFormValidation.runValidator(ValidDecimal)).toBe(true);
    });

    it('Integer field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidInteger)).toBe(false);
        expect(FullFormValidation.runValidator(ValidInteger)).toBe(true);
    });

    it('Email field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidEmail)).toBe(false);
        expect(FullFormValidation.runValidator(ValidEmail)).toBe(true);
    });

    it('Positive integer field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidPositiveInteger)).toBe(false);
        expect(FullFormValidation.runValidator(InvalidPositiveInteger2)).toBe(false);
        expect(FullFormValidation.runValidator(ValidPositiveInteger)).toBe(true);
        expect(FullFormValidation.runValidator(ValidPositiveInteger2)).toBe(true);
    });

    it('Negative integer field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidNegativeInteger)).toBe(false);
        expect(FullFormValidation.runValidator(InvalidNegativeInteger2)).toBe(false);
        expect(FullFormValidation.runValidator(ValidNegativeInteger)).toBe(true);
        expect(FullFormValidation.runValidator(ValidNegativeInteger2)).toBe(true);
    });

    it('Positive decimal field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidPositiveDecimal)).toBe(false);
        expect(FullFormValidation.runValidator(InvalidPositiveDecimal2)).toBe(false);
        expect(FullFormValidation.runValidator(InvalidPositiveDecimalCheckPlus)).toBe(false);
        expect(FullFormValidation.runValidator(ValidPositiveDecimal2)).toBe(true);
    });

    it('Negative decimal field correct and incorrect',()=>{
        expect(FullFormValidation.runValidator(InvalidNegativeDecimal)).toBe(false);
        expect(FullFormValidation.runValidator(InvalidNegativeDecimal2)).toBe(false);
        expect(FullFormValidation.runValidator(ValidNegativeDecimal)).toBe(true);
        expect(FullFormValidation.runValidator(ValidNegativeDecimal2)).toBe(true);
    });

});