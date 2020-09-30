import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Add extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            price: 1
        }
        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }


    updateInput(evt) {
        // le evt.target.value sert à obtenir ce qui s'écrit dans les input
        evt.preventDefault();
        this.setState({
            input: evt.target.value
        })
        //
        let currentInput= this.state.input

        console.log("currentInput1", currentInput)


        console.log("input evt", evt.target.value)
    }


    updatePrice(val) {
        // val est le prix qui change en fonction du slider
        this.setState({
            price: val
        })
        //
        let currentPrice= this.state.price
        console.log("price  event", val)
    }


    submitForm(currentInput, currentPrice) {
        let concat = currentInput + currentPrice

console.log("input dans submit: ", this.state.input)

        this.setState({
            items: this.state.input + this.state.price
        })
        

        let priceInput = this.state.input + ' ' + this.state.price + '€'
        console.log(priceInput)

        let callback =this.props.callback

       
        //console.log('callback', callback)
    }


    render() {
        return (
            
            <div className="col-6 layout">
                <input type="text" onChange={this.updateInput} className="form-control" placeholder="Item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button onClick={() => this.submitForm()} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                </div>
                <RCSlider
                    max={10}
                    min={1}
                    onChange={this.updatePrice}
                    >
                </RCSlider>
                {this.state.price + "€"}
                
            </div>



        )
    }
}

export default Add;