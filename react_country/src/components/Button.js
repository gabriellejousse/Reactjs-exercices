import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends React.Component {


    constructor() {
        super();
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
        console.log("button clicked (Button.js)")

        this.props.onClick()
    }

    render() {
        return (
            <div>
                {/* appeler les props de l'enfant qu'on a écrit dans <Button> dans (App.js) */}
                <button className="btn btn-outline-success mt-4" onClick={this.clickButton}> {this.props.children} </button>
            </div>
        )
    }
}

export default Button;