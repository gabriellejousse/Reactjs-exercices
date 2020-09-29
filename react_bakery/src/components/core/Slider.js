import React, {Component} from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends Component {


    render () {

        return (
            <div>
                <RCSlider 
                max={10}
                min={1} 
                onChange={this.props.updatePrice} >
                </RCSlider>
                
            </div>

        )
    }
}

export default Slider;