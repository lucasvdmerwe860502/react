/**
 * Created by albertusvdmerwe on 2017-03-08.
 */

import React, {Component} from 'react';
const $ = require('jquery');

export default class RadioButtonsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CheckedRadioButtonValue:""
        };
    }

    static defaultProps = {
        Icon: '',
        ContainerWidth:'100%'
    };

    static propTypes = {
        LabelText: React.PropTypes.string.isRequired,
        InputFieldIdentifier: React.PropTypes.string.isRequired,
        OnChangeCallBackFunction: React.PropTypes.func.isRequired,
        CurrentFieldValueState: React.PropTypes.string.isRequired,
        RadioButtonsList:React.PropTypes.array.isRequired,
        ContainerWidth: React.PropTypes.string,
        Icon: React.PropTypes.string,
    };

    OnIconClick=(RadioToMark)=>{
        let CheckedRadioValue=$.trim($('#'+RadioToMark).val());
        $('#'+RadioToMark).trigger('click');
        this.setState({
            CheckedRadioButtonValue:CheckedRadioValue
        },()=>{


            this.props.OnChangeCallBackFunction(CheckedRadioValue);
        });
    };

    componentDidMount=()=>
    {
        this.setState({
            CheckedRadioButtonValue:this.props.CurrentFieldValueState
        });
    };

    render = () => {

        return (
            <span>
                <label>
                     {this.props.LabelText}:
                </label>
                <div>
                    <table className='RadioButtonsAncestor' style={{width: this.props.ContainerWidth}}>
                        <tbody>
                            <tr>
                                <td style={{width: '30px', verticalAlign: 'top'}}>
                                    <i className={this.props.Icon}></i>
                                </td>
                                <td style={{verticalAlign: 'top'}}>
                                    {
                                        this.props.RadioButtonsList.map((value,index)=>{
                                            return (value===this.state.CheckedRadioButtonValue)
                                                ? <div
                                                        onClick={(event)=>{
                                                            this.OnIconClick(this.props.InputFieldIdentifier+'_radiobutton_'+index);
                                                        }}
                                                        id={this.props.InputFieldIdentifier+'_iconsAncestor_'+index}
                                                        style={{height:30}}
                                                        key={'radioGroupIcons_'+index}
                                                        className="Radios RadioFocused">
                                                            <i
                                                                id={this.props.InputFieldIdentifier+'_icons_'+index}
                                                                className="fa fa-check-circle fa-lg">
                                                            </i>
                                                            &nbsp;
                                                            {value}
                                                </div>
                                                :
                                                <div
                                                    onClick={(event)=>{
                                                        this.OnIconClick(this.props.InputFieldIdentifier+'_radiobutton_'+index);
                                                    }}
                                                    id={this.props.InputFieldIdentifier+'_iconsAncestor_'+index}
                                                    style={{height:30}}
                                                    key={'radioGroupIcons_'+index}
                                                    className="Radios RadioBlurred">
                                                        <i
                                                            id={this.props.InputFieldIdentifier+'_icons_'+index}
                                                            className="fa fa-circle-o fa-lg">
                                                        </i>
                                                        &nbsp;
                                                        {value}
                                                </div>

                                        })
                                    }

                                    <div style={{display:'none'}} id={this.props.InputFieldIdentifier+'_hidden_div'}>
                                        {
                                            this.props.RadioButtonsList.map((value,index)=> {

                                                return <input
                                                    value={value}
                                                    key={'radioGroupInputElement_' + index}
                                                    type="radio"
                                                    name={this.props.InputFieldIdentifier}
                                                    id={this.props.InputFieldIdentifier + '_radiobutton_' + index}
                                                    onChange={() => {
                                                    }}
                                                />
                                            })
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
