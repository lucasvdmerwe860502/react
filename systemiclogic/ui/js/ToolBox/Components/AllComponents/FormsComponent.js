import React,{Component} from 'react';
export default class FormsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        Method: 'post',
        Action: '/'
    };

    static propTypes = {
        Method: React.PropTypes.string,
        Action: React.PropTypes.string
    };

    Submit=(event)=>
    {
        event.preventDefault();
    };

    render=()=>{
        return (
            <form className="FormContainer" action={this.props.Action} method={this.props.Method} autoComplete="off" onSubmit={(event)=>{this.Submit(event)}}>
                {this.props.children}
            </form>
        )
    }

}