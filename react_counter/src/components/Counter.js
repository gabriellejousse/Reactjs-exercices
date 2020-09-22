import React, { Component } from 'react';
import '../styles.css'

class Counter extends Component {

    render() {
        
            // essai de condition pour limiter le compteur au dessus de 0:
            if (this.props.count < 0) {

                console.log('en dessous de 0')
            }
        
        return (
            <div className="center-counter">
                <h1 > Counter </h1>
                <h2> {this.props.count}</h2>

                <button value ="" onClick={this.props.incrementFn} className="button-plus"> + </button>
                <button onClick={this.props.decrementFn} className="button-moins"> - </button>
                
            </div>
        )
    }
}

export default Counter;