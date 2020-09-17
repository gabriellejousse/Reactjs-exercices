import React, { Component } from 'react';
import Icon from './core/Icon';


class Person extends Component {

    render() {
        return (
            <div className="box col-md-2 col-6 col-lg-6">
                <span style={{ color: "black" }}>
                    <Icon name="directions_walk"></Icon>
                </span>

                <p> {this.props.step} steps </p>

                {/*                 <span class="material-icons" style={{fontSize: '10O', color: 'black'}}>
                    directions_walk
                </span> */}
            </div>
        )
    }
}

export default Person;