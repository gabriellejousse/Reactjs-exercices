import React, { Component } from 'react';
import specimen from '../../img/specimen.jpg';
import PropTypes from 'prop-types';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            source: specimen
        }
    }

    componentDidMount() {
        const url = `http://konexio.codiscovery.co/bakery/api/?q=${this.props.itemName}`
        console.log(typeof this.props.itemName)
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('result fetch: ', json)

                if (json.success) {
                    this.setState({
                        source: json.source
                    })
                }
            });

    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <button>
                    <img src={this.state.source} onClick={() => this.props.onClickFn(this.props.itemName, this.props.price)} alt=""></img>
                </button>

            </div>

        )
    }
}

Card.propTypes = {
    itemName: PropTypes.string,
    onClickFn: PropTypes.func,
    price: PropTypes.number,
}
Card.defaultProps = {
    itemName: "nom de l'article",
    onClickFn: () => {},
    price: 0,
}

export default Card;