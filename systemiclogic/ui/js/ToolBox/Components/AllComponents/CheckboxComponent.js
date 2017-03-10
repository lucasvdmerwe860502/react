/**
 * Created by albertusvdmerwe on 2017-03-08.
 */

import React, {Component} from 'react';
const $ = require('jquery');
const php=require('phpjs');

export default class CheckboxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CheckedBoxesIDArray:[]
        };
    }

    static defaultProps = {
        Icon: '',
        ContainerWidth:'100%'
    };

    static propTypes = {
        LabelText: React.PropTypes.string.isRequired,
        OnChangeCallBackFunction: React.PropTypes.func.isRequired,
        CheckedIDs: React.PropTypes.array.isRequired,
        CheckBoxList:React.PropTypes.array.isRequired,
        ContainerWidth: React.PropTypes.string,
        Icon: React.PropTypes.string,
    };

    OnIconClick=(CheckID)=>{

        let NewCheckedIDsArray=[];
        let ClonedCheckBoxList=this.props.CheckBoxList.slice(0);
        let FirstCheckBoxID=ClonedCheckBoxList[0].CheckBoxID;
        let HiddenDiv=FirstCheckBoxID+'_hidden_div';
        $('#'+CheckID).trigger('click');
        $('#'+HiddenDiv+' :checkbox').filter(':checked').each((index,element)=>{
            let HiddenCheckBoxID=$(element).attr('id');
            NewCheckedIDsArray.push(HiddenCheckBoxID);
        });

        this.setState({
            CheckedBoxesIDArray:NewCheckedIDsArray
        },()=>{
            this.props.OnChangeCallBackFunction(NewCheckedIDsArray);
        });

    };

    componentDidMount=()=>
    {
        this.setState({
            CheckedBoxesIDArray:this.props.CheckedIDs
        })
    };

    render = () => {

        let ClonedCheckBoxList=this.props.CheckBoxList.slice(0);
        let FirstCheckBoxID=ClonedCheckBoxList[0].CheckBoxID;
        let HiddenDiv=FirstCheckBoxID+'_hidden_div';

        return (
            <span>
                <label>
                     {this.props.LabelText}:
                </label>
                <div>
                    <table className='CheckboxButtonsAncestor' style={{width: this.props.ContainerWidth}}>
                        <tbody>
                            <tr>
                                <td style={{width: '30px', verticalAlign: 'top'}}>
                                    <i className={this.props.Icon}></i>
                                </td>
                                <td style={{verticalAlign: 'top'}}>

                                    {
                                        this.props.CheckBoxList.map((CheckBoxItem,index)=>{

                                            let CheckID=CheckBoxItem.CheckBoxID;
                                            let CheckValue=CheckBoxItem.CheckBoxValue;
                                            let CheckedIDsClone=this.state.CheckedBoxesIDArray.slice(0); // list of all the clicked checkboxes
                                            let IconID=CheckID+'checkbox_icons_'+index;


                                            return (php.in_array(CheckID,CheckedIDsClone))?

                                                <div
                                                    onClick={(event)=>{
                                                        this.OnIconClick(CheckID);
                                                    }}
                                                    id={IconID}
                                                    style={{height:30}}
                                                    key={IconID}
                                                    className="CheckBoxes CheckBoxFocused">
                                                    <i
                                                        className="fa fa-check-square-o fa-lg">
                                                    </i>
                                                    &nbsp;
                                                    {CheckValue}
                                                </div> :
                                                <div
                                                    onClick={(event)=>{
                                                        this.OnIconClick(CheckID);
                                                    }}
                                                    id={IconID}
                                                    style={{height:30}}
                                                    key={IconID}
                                                    className="CheckBoxes">
                                                    <i
                                                        className="fa fa-square-o fa-lg">
                                                    </i>
                                                    &nbsp;
                                                    {CheckValue}
                                                </div>
                                        })
                                    }

                                    <div style={{display:'none'}} id={HiddenDiv}>
                                        {
                                            this.props.CheckBoxList.map((CheckBoxItem,index)=>{
                                                let CheckID=CheckBoxItem.CheckBoxID;
                                                let CheckValue=CheckBoxItem.CheckBoxValue;

                                                return <input key={index} type="checkbox" name={CheckID} id={CheckID} value={CheckValue}/>
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
