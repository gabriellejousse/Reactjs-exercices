import React, { Component } from 'react';
import Card from './product/Card';
import PropTypes from 'prop-types';

class Pay extends Component {

    constructor() {
        super();
        this.state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcoTax: 0
        }
        this.onClickProduct = this.onClickProduct.bind(this);
        this.renderCards = this.renderCards.bind(this);
    }

    basket (){
console.log("price dans pay:", this.price)
    }

    onClickProduct(name, price) {
        console.log('onClickProduct: ', name, price);
        console.log("total", this.state.total); 
    }

    renderEcoTax () {

     /*    this.setState({
            totalEcoTax:
        }) */
/*         return this.props.price.map((elem, index) => {
            console.log("elem: " , elem)
            return elem += 0.03
            
        }) */
        
    }

    renderTva () {
        return this.props.price.map((elem, index) => {
            console.log("elem: " , elem)
            return elem *= 1.2
           
        })
    }

    renderCards() {

        return this.props.items.map((elem, index) => {

            return <Card
                key={index}
                itemName={elem.itemName}
                price={elem.price}
                onClickFn={this.onClickProduct}></Card>
        })
    }


    render() {
        return (
            <div onClick={this.props.onClick}>
                <h2>Pay</h2>
                <div> {this.state.total} </div>
                {this.renderCards()}

            </div>
        )
    }
}

Pay.propTypes = {
    onClick: PropTypes.func
}

Pay.defaultProps = {
    onClick: () => {}
}

export default Pay;