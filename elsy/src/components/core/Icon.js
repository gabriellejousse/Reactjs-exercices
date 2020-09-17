import React, { Component } from 'react';

class Icon extends Component {

    render() {

        return (
            <span className="material-icons" >
                <p>{this.props.name}</p>
                
            </span>
        )
    }
}

export default Icon;