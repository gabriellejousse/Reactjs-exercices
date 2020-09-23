import React, { Component } from 'react';
import Icon from './core/Icon';
import Slider from 'rc-slider';

class HeartRate extends Component {

    render() {
        return (
            <div className="box col-md-2 col-6 " >
                <span style={{ color: "red" }}>
                    <Icon name="favorite" ></Icon>
                </span>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.heart} >
                </Slider>

                <p>{this.props.heart} BPM </p>

                {/*                 <span class="material-icons" style={{fontSize: '10O', color: 'red'}}>
                    favorite
                </span> */}


            </div>
        )
    }
}

export default HeartRate;