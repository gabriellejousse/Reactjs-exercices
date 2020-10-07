import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'request';
import Button from './components/Button';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: 0,
      region: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.clickButton2 = this.clickButton2.bind(this)
    //this.buttonFrance = this.buttonFrance.bind(this)
    //this.buttonBrazil = this.buttonBrazil.bind(this)
    //this.buttonCroatia = this.buttonCroatia.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/name/france')

      .then(res => res.json())
      .then(json => {
        console.log("fetch: ", fetch(''))
        console.log("fetch - json: ", json)

        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
          search: ""
        })
      });
  }

  //paramètre dans lafonction car remontée de données, il récupère les données 'france', 'brazil...)
  clickButton2(country) {
    console.log("button clicked (App.js)", country)
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)

      .then(res => res.json())
      .then(json => {
        console.log("fetch: ", fetch(''))
        console.log("fetch - json: ", json)

        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region
        })
      });
  }

  /*   buttonFrance() {
      fetch('https://restcountries.eu/rest/v2/name/france')
  
        .then(res => res.json())
        .then(json => {
          console.log("fetch: ", fetch(''))
          console.log("fetch - json: ", json)
  
          this.setState({
            name: json[0].name,
            capital: json[0].capital,
            flag: json[0].flag,
            population: json[0].population,
            region: json[0].region
          })
        });
    }
  
    buttonBrazil() {
      fetch('https://restcountries.eu/rest/v2/name/brazil')
  
        .then(res => res.json())
        .then(json => {
          console.log("fetch: ", fetch(''))
          console.log("fetch - json: ", json)
  
          this.setState({
            name: json[0].name,
            capital: json[0].capital,
            flag: json[0].flag,
            population: json[0].population,
            region: json[0].region
          })
        });
    }
  
    buttonCroatia() {
      fetch('https://restcountries.eu/rest/v2/name/croatia')
  
        .then(res => res.json())
        .then(json => {
          console.log("fetch: ", fetch(''))
          console.log("fetch - json: ", json)
  
          this.setState({
            name: json[0].name,
            capital: json[0].capital,
            flag: json[0].flag,
            population: json[0].population,
            region: json[0].region
          })
        });
    } */

  updateInput(evt) {
    this.setState({
      search: evt.target.value
    })

    console.log(this.state.search)
  }

  render() {
    return (
      <div className="App container-fluid mt-6">

        <label> Search your country : </label>
        <input onChange={this.updateInput} type="text" className="form-control col-4"></input>
        <button onClick={() => this.clickButton2(this.state.search)} type="button" className="btn btn-outline-success mt-2"> Search </button>



        {/*         <Button onClick={() => this.buttonFrance('france')} > France </Button>
        <Button onClick={() => this.buttonBrazil('brazil')} > Brazil </Button>
        <Button onClick={() => this.buttonCroatia('croatia')} > Croatia </Button> */}

        {/*  <h1> Country : {this.state.country}</h1>
        <h2> Capital : {this.state.capital}</h2>
        <h3> Region : {this.state.region}</h3>
        <h3> Population : {this.state.population}</h3> */}

        <div className="mt-4">
          <Card info={this.state} ></Card>
        </div>
      </div>
    );
  }
}

export default App;
