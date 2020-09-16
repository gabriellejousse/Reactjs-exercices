import React from 'react';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component{

  render(){

    return(
      <div class="container-fluid">
        <h2> Bonjour ! </h2>
      </div>
      <div>
       <p>Battements de coeur: {constMIN_HEART}</p>
      </div>

    )
  }
}

export default App;