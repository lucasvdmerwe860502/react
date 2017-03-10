/**
 * Created by albertusvdmerwe on 2017-03-09.
 */
import React,{Component} from 'react';

export default class PageContentHolderComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state={};
    }

    render()
    {
        return (
            <div className="PageContentHolder">
                {this.props.children}
            </div>
        )
    }
}