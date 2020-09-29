import React, { Component } from 'react';
import Slider from './core/Slider';

class Add extends Component {

constructor(){
    super();
    this.state={
        input:"",
        price:1
    }
    this.updateInput = this.updateInput.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.submitForm = this.submitForm.bind(this)
}


updateInput(evt){
    evt.preventDefault();
    evt.persist();
    this.setState({
        input: evt.target.value
})

updatePrice(evt){
    this.setState({

    })
}

submitForm(){
    console.log(this.state.input)
    console.log(this.state.price)
}

    render(){
        return(
<div className=" col-6">
  <input type="text" onChange={this.updateInput} className="form-control" placeholder="Item" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button onClick= {this.submitForm} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
  </div>
  <Slider></Slider>
</div>



        )
    }
}

export default Add;