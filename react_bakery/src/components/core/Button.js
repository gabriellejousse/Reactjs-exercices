import React, { Component } from 'react';
import Add from '../Add'

class Button extends Component {

    render() {
        return (
            
                <button className={this.props.isSelected ? 'btn btn-outline-primary active': 'btn btn-outline-primary'}
                 children="" isselected="" onClick={this.props.onClick} type="button" 
                 >{this.props.name}</button>
            
        )
    }
}
export default Button;