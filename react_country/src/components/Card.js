import React, { Component } from 'react';


class Card extends React.Component {


  
    render() {
        return (
            <div>
                <img style={{width:"150px" }} src={this.props.info.flag}></img>
           <p>{this.props.info.name}</p> 
           <p>{this.props.info.capital}</p> 
           <p>{this.props.info.population}</p> 
           <p>{this.props.info.region}</p> 
           </div>
        )
    }
}

export default Card;