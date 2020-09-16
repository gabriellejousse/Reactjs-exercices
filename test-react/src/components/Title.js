import React, { Component } from 'react';

class Title extends Component {

    render (){
        return (
            <div class="bloc-h1"> 
                <h1> I'm a React's title</h1>
                <div>

                </div>
                <h1 class='red'>
                ♥ 
                </h1>
                <h3> My name is {this.props.name}</h3>
                <h4> I am {this.props.age}</h4>
        <h5 class="blue"> I speak {this.props.languages.join(', ')}</h5>
            </div>
        )
    }
}

export default Title