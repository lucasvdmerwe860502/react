/**
 * Created by albertusvdmerwe on 2017-03-08.
 */

import React, {Component} from 'react';
const $ = require('jquery');

export default class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        Width: '100%',
        Icon: '',
        Status: ''
    };

    static propTypes = {
        Status: React.PropTypes.string,
        LabelText: React.PropTypes.string.isRequired,
        InputFieldIdentifier: React.PropTypes.string.isRequired,
        OnChangeCallBackFunction: React.PropTypes.func.isRequired,
        CurrentFieldValueState: React.PropTypes.string.isRequired,
        Width: React.PropTypes.string,
        Icon: React.PropTypes.string,
        ListItems: React.PropTypes.array.isRequired
    };

    OnChangeFunction = (event) => {
        let value = event.target.value;
        this.props.OnChangeCallBackFunction(value);
    };

    componentDidMount = () => {
        if (this.props.Status === 'readonly') {
            $('#' + this.props.InputFieldIdentifier).attr('readonly', 'readonly');
        }
        else {
            $('#' + this.props.InputFieldIdentifier).removeAttr('readonly');
        }
    };

    render = () => {

        let Options = this.props.ListItems;

        return (
            <span>
                <label htmlFor={this.props.InputFieldIdentifier}>
                     {this.props.LabelText}:
                </label>
                <div>
                    <table className='DropdownAncestor' style={{width: this.props.Width}}>
                        <tbody>
                            <tr>
                                <td style={{width: '30px', verticalAlign: 'top'}}>
                                    <i className={this.props.Icon}></i>
                                </td>
                                <td style={{verticalAlign: 'top'}}>
                                    <select
                                        name={this.props.InputFieldIdentifier}
                                        id={this.props.InputFieldIdentifier}
                                        onChange={this.OnChangeFunction}
                                        className="form-control ReactDropDowns"
                                        autoComplete="off"
                                        value={this.props.CurrentFieldValueState}
                                    >
                                        <option value=""> - Please select - </option>
                                    {
                                        Options.map((item,arrayIndex) => {
                                            return <option key={arrayIndex} value={item}>{item}</option>
                                        })
                                    }
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </span>
        )
    }
}
