import React, { Component } from 'react';
import Card from './product/Card';

class Pay extends Component{

constructor(){
super();
this.state = {
    basket: [],
    total: 0,
    totalVat: 0,
    totalEcoTax: 0
}
}

onClickProduct(name, price){
    console.log('onClickProduct: ', name, price);
}

renderCards(){

return this.props.items.map((elem, index) => {

    return <Card 
    key={index}
    itemName={elem.itemName} 
    price={elem.price}
    onClickFn={this.onClickProduct}></Card>
})
}


    render(){
        return(
<div onClick={this.props.onClick}>
    <h2>Pay</h2>
    <div> {this.state.total} </div>
    {this.renderCards()}
    
</div>
        )
    }
}
export default Pay;