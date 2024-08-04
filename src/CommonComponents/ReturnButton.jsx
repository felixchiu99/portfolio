import '../App.css';
import React from 'react';

class ReturnButton extends React.Component {
    render() {
        return (
            <a href={this.props.link} >
                <button class="button" >{this.props.title?this.props.title:"Return"}</button>
            </a>
        );
    }
}
export default ReturnButton;
