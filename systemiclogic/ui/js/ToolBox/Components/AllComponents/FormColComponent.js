import React,{Component} from 'react';

export default class FormColComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    static defaultProps = {
        MinWidth:'250px',
        MaxWidth:'100%'
    };

    static propTypes = {
        MinWidth: React.PropTypes.string,
        MaxWidth: React.PropTypes.string,
    };

    render=()=>{
        return (
            <div className="FormColumn" style={{minWidth:this.props.MinWidth,maxWidth:this.props.MaxWidth}}>
                {this.props.children}
            </div>
        )
    }
}