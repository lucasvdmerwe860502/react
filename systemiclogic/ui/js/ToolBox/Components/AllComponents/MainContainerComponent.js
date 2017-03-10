import React,{Component} from 'react';
export default class MainContainerComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state={};
    }

    render()
    {
        return (
            <div className="MainContainer">
                {this.props.children}
            </div>
        )
    }
}