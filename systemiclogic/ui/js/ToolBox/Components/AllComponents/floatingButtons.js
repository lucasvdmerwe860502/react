import React, {Component} from 'react';

export default class floatingButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        Background: '#01579b',
        TextColor: 'white',
        Title: '',
        Width:'35px'
    };

    static propTypes = {
        CallBack: React.PropTypes.func.isRequired,
        Title: React.PropTypes.string,
        Background: React.PropTypes.string,
        TextColor: React.PropTypes.string,
        Width:React.PropTypes.string
    };


    OnClickFunction = (event)=> {
        event.preventDefault();
        this.props.CallBack();
    };


    render() {

        return (
            <button type="button" title={this.props.Title}
                    style={
                    {
                        backgroundColor: this.props.Background,
                        color: this.props.TextColor,
                        width:this.props.Width,
                        height:35
                    }
                    }
                    className='floatingButtons' onClick={this.OnClickFunction.bind(this)}>
                {this.props.children}
            </button>
        )
    }


}