import React from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-tabs';
import RCSlider from 'rc-slider';
import Card from './components/product/Card';

class App extends React.Component {


  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.addItem = this.addItem.bind(this);

    this.state = {
      activeTab: "add",
      items: []
    }
  }
  onClickTabAdd() {
    console.log("Click Add")
    this.setState({
      activeTab: "add"
    })

  }

  onClickTabList() {
    console.log("Click List")
    this.setState({
      activeTab: "list"
    })
  }

  onClickTabPay() {
    console.log("Click Pay")
    this.setState({
      activeTab: "pay"

    })
  }

  addItem(currentInput, currentPrice) {

    let newItems = this.state.items
    newItems.push({ itemName: currentInput, price: currentPrice })

    this.setState({
      items: newItems
    })
    console.log("price + input (APP.js): ", currentInput, currentPrice + "€")
    console.log("items: ", this.state.items)
  }


  render() {
    return (
      <div>


        <section>
          <h1 className="titleBakery text-center"> Bakery Shop</h1>
          <nav className="row justify-content-center">
            <Button name="Add" isSelected={this.state.activeTab === "add"} onClick={this.onClickTabAdd}></Button>
            <Button name="List" isSelected={this.state.activeTab === "list"} onClick={this.onClickTabList}></Button>
            <Button name="Pay" isSelected={this.state.activeTab === "pay"} onClick={this.onClickTabPay}></Button>
          </nav>
        </section>

        {/* // si la valeur de la tab active est "add", j'affiche le composant Add 
// sinon, si la valeur de la tab active est "list", j'affiche le composant List
// si aucune de ces conditions n'est respectée ; on affiche le composant pay
// (deux conditions ternaires imbriquées) 
// pour éviter de faire des conditions trop compliquées, on peut utiliser la méthode de créer un nouveau sub render*/}
<section className="row justify-content-center">
        {this.state.activeTab === "add" ? <Add addItem={this.addItem}></Add> : this.state.activeTab === "list" ? <List items={this.state.items}></List> : <Pay items={this.state.items}></Pay>}
        </section>




      </div>
    );
  }

}

export default App;
