import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'request';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: 0,
      region: ""
    }
    this.requestCountry = this.requestCountry.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
componentDidMount(){
  let request = require('request');
  fetch('https://restcountries.eu/rest/v2/', request)
  console.log("fetch: ", fetch(''))
  .then(res => res.json())
  .then(json => {
    // code
  });
}




  requestCountry(){
    let request = require('request');
    request.get('https://restcountries.eu/rest/v2/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the url link


  // sert à convertir les infos du site en objet (string devient -> objet)
  // on pourra donc utiliser les propriétés de l'objet  (pas possible si le body reste en string):
  let arrJson = JSON.parse(body)
console.log("arrJson = Json.parse(body): ", arrJson)

  // parcourir tout arrJson et afficher uniquement les keys "name" qui correspond au pays:
  for (let i = 0; i < arrJson.length - 1; i++) {
   console.log(arrJson[i])
    let result = arrJson[i]["name"];
    console.log("result name: ", result)
  }

});
  }

  render() {
    return (
      <div className="App">
        <h1> Country : {this.requestCountry()}</h1>
        <h2> Capital : {this.state.capital}</h2>
        <h3> Region : {this.state.region}</h3>
        <h3> Population : {this.state.population}</h3>
      </div>
    );
  }
}

export default App;
