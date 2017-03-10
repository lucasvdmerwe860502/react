import React, {Component} from 'react';

export default class PrefabButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        Background: '#01579b',
        TextColor: 'white',
        Title: '',
        Width:'40px',
        Type:'button'
    };

    static propTypes = {
        CallBack: React.PropTypes.func.isRequired,
        Title: React.PropTypes.string,
        Background: React.PropTypes.string,
        TextColor: React.PropTypes.string,
        Width:React.PropTypes.string,
        Type:React.PropTypes.string
    };


    OnClickFunction = (event)=> {
        event.preventDefault();
        this.props.CallBack();
    };


    render() {

        return (
            <button type={this.props.Type} title={this.props.Title}
                    style={
                        {
                            backgroundColor: this.props.Background,
                            color: this.props.TextColor,
                            width:this.props.Width,
                            height:this.props.Width,
                            textAlign:'center',
                            verticalAlign:'middle'
                        }
                    }
                    className='PrefabButtons' onClick={this.OnClickFunction.bind(this)}>
               <div style={{display:'block',marginLeft:'auto',marginRight:'auto',verticalAlign:'middle',textAlign:'center'}}>
                   {this.props.children}
               </div>
            </button>
        )
    }


}