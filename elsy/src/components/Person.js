import React, { Component } from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';



class Person extends Component {

    render() {

        return (
            <div className="box col-md-2 col-6 ">
                <span style={{ color: "black" }}>
                    <Icon name="directions_walk"></Icon>
                </span>
                <Slider
                min={this.props.min}
                max={this.props.max}
                onChange={this.props.onChange}
                value={this.props.steps}>
                </Slider>

                <p> {this.props.steps} steps </p>

                {/*                 <span class="material-icons" style={{fontSize: '10O', color: 'black'}}>
                    directions_walk
                </span> */}
            </div>
        )
    }
}

export default Person;