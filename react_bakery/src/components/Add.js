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

        this.setState({
            input: evt.target.value
        })
        //
        let currentInput = this.state.input

        console.log(currentInput)
    }


    updatePrice(val) {
        // val est le prix qui change en fonction du slider
        this.setState({
            price: val
        })
        //
        //let currentPrice= this.state.price
        console.log(val)
    }


    submitForm() {

        let currentPrice = this.state.price
        let currentInput = this.state.input
        console.log("Variable currentPrice (add.js): ", currentPrice)
        console.log("Variable currentInput (add.js): ", currentInput)

        this.setState({
            items: currentPrice + currentInput
        })

        // concaténation de l'input et de la variable:
        let priceAndInput = currentInput + ' ' + currentPrice + '€'
        console.log("price + input (add.js): ", priceAndInput)

        // ça renvoie les paramètres vers le parent App.js: 
        this.props.addItem(currentInput, currentPrice)
    }


    render() {
        return (

            <div className=" col-4">
                <h4 className="text-center colorblue mt-2 mb-4"> What do you want today ?</h4>
                <input type="text" onChange={this.updateInput} className="form-control mb-3" placeholder="Add your item here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                
                <RCSlider
                    max={10}
                    min={1}
                    onChange={this.updatePrice}
                >
                </RCSlider>
                <h5 className="colorpink text-center mt-3"><strong>{this.state.price + "€"}</strong></h5>

                <div className="row justify-content-center mt-4 btn-wrapper">
                    <button onClick={() => this.submitForm()} className="button-add" type="button" id="button-addon2">Add</button>
                </div>

            </div>



        )
    }
}

export default Add;