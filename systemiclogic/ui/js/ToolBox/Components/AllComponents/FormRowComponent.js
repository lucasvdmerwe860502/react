import React,{Component} from 'react';

export default class FormRowComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    static defaultProps = {
        Wrap:'nowrap'
    };

    static propTypes = {
        Wrap: React.PropTypes.string
    };

    render=()=>{
        return (
            <div className="FormRow" style={{flexWrap:this.props.Wrap}}>
                {this.props.children}
            </div>
        )
    }
}