import React,{Component} from 'react';

export default class HeaderPanelComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }


    render()
    {
        return (
            <div className="HeaderPanelContainer">
                {this.props.children}
            </div>
        )
    }


}