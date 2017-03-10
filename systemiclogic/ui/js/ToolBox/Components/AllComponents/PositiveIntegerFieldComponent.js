import React,{Component} from 'react';
var $=require('jquery');
import ValidationContextClass from '../../Modules/Validation/Context/ValidationContextClass';
import IsPositiveInteger from '../../Modules/Validation/IsPositiveInteger';

export default class PositiveIntegerFieldComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BorderColor:this.props.DefaultBorderColor
        };
    }

    static defaultProps = {
        Width:'100%',
        Icon: '',
        Status:''
    };

    static propTypes = {
        Status:React.PropTypes.string,
        DefaultBorderColor:React.PropTypes.string.isRequired,
        FocusBorderColor:React.PropTypes.string.isRequired,
        WarningBorderColor:React.PropTypes.string.isRequired,
        MaxLength: React.PropTypes.number.isRequired,
        LabelText: React.PropTypes.string.isRequired,
        InputFieldIdentifier: React.PropTypes.string.isRequired,
        OnChangeCallBackFunction: React.PropTypes.func.isRequired,
        CurrentFieldValueState: React.PropTypes.string.isRequired,
        Width: React.PropTypes.string,
        Icon: React.PropTypes.string
    };

    OnChangeFunction = (event)=> {
        var value = $.trim(event.target.value);
        var enteredValueLength=Number(value.length);
        var MaxChars=Number(this.props.MaxLength);
        var charsRemainingToUse = MaxChars - enteredValueLength;
        var validity=new ValidationContextClass(new IsPositiveInteger(value)).StartValidation();

        if(charsRemainingToUse>=0&&validity===true)
        {
            this.props.OnChangeCallBackFunction(value);
            this.setState((prevState)=>({
                BorderColor:this.props.FocusBorderColor
            }));
        }
        else
        {
            if(value==="")
            {
                this.props.OnChangeCallBackFunction(value);
                this.setState((prevState)=>({
                    BorderColor:this.props.FocusBorderColor
                }));
            }
            else
            {
                this.setState((prevState)=>({
                    BorderColor:this.props.WarningBorderColor
                }));
            }
        }
    };

    OnFieldFocus = (event)=> {
        this.setState((prevState)=>({
            BorderColor:this.props.FocusBorderColor
        }))
    };

    OnFieldBlur = (event)=> {
        this.setState((prevState)=>({
            BorderColor:this.props.DefaultBorderColor
        }));
    };

    componentDidMount=()=>{
        if(this.props.Status==='readonly')
        {
            $('#'+this.props.InputFieldIdentifier).attr('readonly','readonly');
        }
        else
        {
            $('#'+this.props.InputFieldIdentifier).removeAttr('readonly');
        }
    };

    render = ()=> {

        var value = this.props.CurrentFieldValueState;
        var enteredValueLength=Number(value.length);
        var MaxChars=Number(this.props.MaxLength);
        var charsRemainingToUse = MaxChars - enteredValueLength;


        return (
            <span>
                <label htmlFor={this.props.InputFieldIdentifier}>
                     {this.props.LabelText}:
                </label>
                <div>
                    <table className='TextFieldsAncestor' style={{width:this.props.Width}}>
                        <tbody>
                            <tr>
                                <td style={{width:30,verticalAlign:'top'}}>
                                    <i className={this.props.Icon}></i>
                                </td>
                                <td style={{verticalAlign:'top'}}>
                                    <input
                                        name={this.props.InputFieldIdentifier}
                                        id={this.props.InputFieldIdentifier}
                                        type='text'
                                        onChange={this.OnChangeFunction}
                                        onBlur={this.OnFieldBlur}
                                        onFocus={this.OnFieldFocus}
                                        className="TextField"
                                        value={this.props.CurrentFieldValueState}
                                        style={{width: '100%',borderBottomColor:this.state.BorderColor}}
                                        autoComplete="off"
                                    />
                                    <div style={{marginTop: 10, fontSize: '0.9em', color: 'black'}}>
                                        {
                                            (charsRemainingToUse===0) ? charsRemainingToUse +' characters remaining ':''
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </span>
        )
    }
}