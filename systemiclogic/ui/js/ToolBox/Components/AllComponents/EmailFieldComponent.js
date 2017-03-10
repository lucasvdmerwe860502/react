import React,{Component} from 'react';
import ValidationContextClass from '../../Modules/Validation/Context/ValidationContextClass';
import IsEmail from '../../Modules/Validation/IsEmail';
var $=require('jquery');

export default class EmailFieldComponent extends Component{
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
        var value = event.target.value;
        var enteredValueLength=Number(value.length);
        var MaxChars=Number(this.props.MaxLength);
        var charsRemainingToUse = MaxChars - enteredValueLength;

        if(charsRemainingToUse>=0)
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

    OnFieldBlur = (event)=>
    {

        var validity=new ValidationContextClass(new IsEmail(event.target.value)).StartValidation();

        if(
            !validity &&
            $.trim(event.target.value)!==''
        )
        {
            this.setState((prevState)=>({
                BorderColor:this.props.WarningBorderColor
            }));
        }
        else
        {
            this.setState((prevState)=>({
                BorderColor:this.props.DefaultBorderColor
            }));
        }
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
                                <td style={{width:'30px',verticalAlign:'top'}}>
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
                                         className='TextField'
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