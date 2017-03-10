import React,{Component} from 'react';

export default class SubmitButtonsComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    static defaultProps = {
        BootstrapClass:'btn-default'
    };

    static propTypes = {
        BootstrapClass:React.PropTypes.string,
        CallBack:React.PropTypes.func.isRequired
    };


    OnClickFunction=(event)=>{
        event.preventDefault();
        this.props.CallBack();
    };



    render(){
        var btn_class=`btn ${this.props.BootstrapClass} SubmitButtons`;
        return (
            <div>
                <button type="submit" className={btn_class} onClick={this.OnClickFunction.bind(this)}>
                    {this.props.children}
                </button>
            </div>
        )
    }





}