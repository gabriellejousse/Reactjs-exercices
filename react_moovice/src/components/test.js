import React from 'react';
import CompB from './CompB'

class CompA extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'coucou',
            countries: []
        }
        this.click = this.click.bind(this)
    }


    click() {
        this.setState({
            name: 'salut'
        })
    }

    render() {
        return (
            <div>
                <h1>Je suis le composant A</h1>
                <CompB title={this.state.name} countries={this.state.countries}></CompB>
                <button onclick={this.click}></button>
            </div>
        )
    }
}

export default CompA;


// ------------------------

import React, { Component } from 'react';

class CompB extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'nihao'
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log('Je suis une méthode de cycle de vie appellé au mount')
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.countries}</p>
            </div>
        )
    }
}

export default CompB;