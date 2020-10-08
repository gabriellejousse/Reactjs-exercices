import React from 'react';
import imgDefault from '../../placeholder.png';
import PropTypes from 'prop-types';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            image: ""
        }
    }

    componentDidMount() {

        this.setState({
            image: `https://image.tmdb.org/t/p/w300${this.props.image}`
        })
        console.log("type image:", typeof this.state.image)
    }

    render() {
        return (
            <div className="container-fluid ">
                <section className="col-5  text-left ">
                    <img src={this.state.image} className="imgcss"></img>
                    <h5 className="mt-2"> {this.props.title}</h5>
                    <p className="mb-4"> {this.props.description} </p>
                </section>
            </div>

        )
    }
}


Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
Card.defaultProps = {
    image: '../../placeholder.png',
    title: "sans titre",
    description: "sans description",
}

export default Card;