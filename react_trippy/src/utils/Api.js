import React from 'react';
import {Config} from '../Config';

class Api extends React.Component{

constructor(){
    super();

    this.getHome = this.getHome.bind(this);
}

getHome(){
    fetch(`${Config.host}${"/api/home"}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    });
}

    render(){
        return(
            <div>
               <h1 getHomeFunc={this.getHome()}> </h1>
            </div>
        )
    }
}
export default new Api();