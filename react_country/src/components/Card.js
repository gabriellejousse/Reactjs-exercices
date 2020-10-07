import React, { Component } from 'react';


class Card extends React.Component {



    render() {
        return (
            <div>
                <img style={{ width: "150px" }} src={this.props.info.flag}></img>
                <h4 className="mt-3 mb-2">
                    <strong>{this.props.info.name}</strong>
                </h4>
                <p className="mb-2"> <strong> Capital : </strong> {this.props.info.capital}</p>
                <p className="mb-2"> <strong> Population : </strong> {this.props.info.population}</p>
                <p className="mb-2"> <strong>Continent : </strong>{this.props.info.region}</p>
            </div>
        )
    }
}

export default Card;