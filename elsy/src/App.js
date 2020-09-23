import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Slider from './components/core/Slider';
import Icon from './components/core/Icon';
import Temperature from './components/Temperature';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
const MIN_WATER = 1.5;

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)
  }

  onHeartChange(val) {
    this.setState({
      heart: val
    })
  }

  onStepsChange(val) {
    this.setState({
      steps: val
    })
  }

  onTemperatureChange(val) {
    this.setState({
      temperature: val
    })
  }

  calculateWater(val){
    this.setState({
      water: val
    })
  }

  render() {

    return (
      <div className="container-fluid">
        <Water 
        water={this.state.water}
        min={MIN_WATER}>
        </Water>

        <Person
          steps={this.state.steps}
          min={MIN_STEPS}
          max={MAX_STEPS}
          onChange={this.onStepsChange}>
        </Person>

        <HeartRate
          heart={this.state.heart}
          min={MIN_HEART}
          max={MAX_HEART}
          onChange={this.onHeartChange}>
        </HeartRate>

        <Temperature
          temperature={this.state.temperature}
          min={MIN_TEMPERATURE}
          max={MAX_TEMPERATURE}
          onChange={this.onTemperatureChange}>
        </Temperature>

      </div>

    );
  }
}

export default App;