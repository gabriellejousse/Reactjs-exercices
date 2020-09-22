import React, { Component } from 'react';

class Icon extends Component {

    render() {

        return (
            <span className="material-icons" style={{fontSize:"100px"}}>
                <p>{this.props.name}</p>
                
            </span>
        )
    }
}

export default Icon;