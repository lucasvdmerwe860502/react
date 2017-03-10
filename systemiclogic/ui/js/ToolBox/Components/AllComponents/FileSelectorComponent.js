/**
 * Created by albertusvdmerwe on 2017-03-08.
 */

import React, {Component} from 'react';
const $=require('jquery');
import StartFileReader from '../../Modules/AllModules/ReadLocalFiles/StartFileReader';
import {AlertDisplay} from '../../Modules/ModuleList';

export default class FileSelectorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        Icon: ''
    };

    static propTypes = {
        LabelText: React.PropTypes.string.isRequired,
        InputFieldIdentifier: React.PropTypes.string.isRequired,
        OnChangeCallBackFunction: React.PropTypes.func.isRequired,
        Icon: React.PropTypes.string
    };

    OnChangeFunction = (event) => {

        var FileReadHandler=new StartFileReader(event);
        FileReadHandler.Read(()=>{
            var Base64=window.sessionStorage.getItem('IdeaBase64');
            if(Base64!==null)
            {
                this.props.OnChangeCallBackFunction(Base64);
            }
            else
            {
                AlertDisplay.show('Something went wrong. Please try again.');
            }

            window.sessionStorage.removeItem('IdeaBase64');
            $('#'+this.props.InputFieldIdentifier).val('');
        });
    };

    FocusSelectInput=()=>{
        $('#'+this.props.InputFieldIdentifier).trigger('click');
    };

    render = () => {
        return (
            <span>
                <label htmlFor={this.props.InputFieldIdentifier}>
                     {this.props.LabelText}:
                </label>
                <div>
                    <table className='FileSelectorAncestor'>
                        <tbody>
                            <tr>
                                <td  style={{width:'30px',verticalAlign:'top'}}>
                                    <i className={this.props.Icon}></i>
                                </td>
                                <td style={{verticalAlign: 'bottom'}}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={()=>{
                                            this.FocusSelectInput()
                                        }}
                                    >
                                        File selector
                                    </button>
                                    <div style={{display:'none'}}>
                                        <input
                                            type="file"
                                            id={this.props.InputFieldIdentifier}
                                            name={this.props.InputFieldIdentifier}
                                            onChange={(event)=>{
                                                this.OnChangeFunction(event)
                                            }}
                                        />
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