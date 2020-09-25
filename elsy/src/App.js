import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Slider from './components/core/Slider';
import Icon from './components/core/Icon';
import Temperature from './components/Temperature';
import '../src/css/bootstrap.min.css';
import '../src/css/styles.css';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      water: 1.5,
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
    let newWater = this.calculateWater(this.state);

    this.setState({
      heart: val,
      water: newWater
    })
  }

  onStepsChange(val) {
    let newWater = this.calculateWater(this.state);

    this.setState({
      steps: val,
      water: newWater
    })
  }

  onTemperatureChange(val) {
    let newWater = this.calculateWater(this.state);
    this.setState({
      temperature: val,
      water: newWater
    })
  }

  calculateWater(obj) {
    //obj.steps
    //obj.heart
    //obj.temperature
    //on initialise le nb de litre au début:
    let liters = 1.5
    let newWater = this.state.water
    if (obj.temperature > 20) {
      let upTemp = obj.temperature - 20
      // on ajoute a 'liters' le nb de l en + en fonction de la temp. au dessus de 20°C:
      liters += upTemp * 0.02

    } else if (obj.heart > 120) {
      let upHeart = obj.heart - 120
      liters += upHeart * 0.0008
      //newWater = this.state.water + (0.0008 * (this.state.heart - 120))

    } else if (obj.steps > 10000) {
      let upSteps = obj.steps - 10000
      liters += upSteps * 0.00002
      //newWater = this.state.water + (0.00002 * (this.state.steps - 10000))
    }
    console.log(liters)
    // au lieu de "return liters", on ajoute Math.round pour arrondir le nb
    return Math.round(liters * 100) /100

  }


  render() {

    return (

      <div className="container-fluid">
        <Water
          water={this.state.water}>
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