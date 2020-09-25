import React, {Component} from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Temperature extends Component {

    render() {
        return(
            <div className="box col-md-2 col-6 ">
            <span style={{ color: "yellow" }}>
                <Icon name="wb_sunny"></Icon>
            </span>
            <Slider
            min={this.props.min}
            max={this.props.max}
            onChange={this.props.onChange}
            value={this.props.temperature}>
            </Slider>

            <p> {this.props.temperature} °C </p>

            {/*                 <span class="material-icons" style={{fontSize: '10O', color: 'black'}}>
                directions_walk
            </span> */}
        </div>

        )
    }
}

export default Temperature;