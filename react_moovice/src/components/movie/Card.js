import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {


    render() {
        const {
            title,
            description,
            imgUrl
        } = this.props

        return (
            <div className="container-fluid">
                <section className="text-left border border-warning mb-4 pt-4 px-3">
                    <img src={imgUrl} className="imgcss" alt=""></img>
                    <h5 className="mt-2 color-title"><strong> {title}</strong></h5>
                    <p className="mb-4"> {description} </p>
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



/* import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            image: ""
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {

        this.setState({
            image: `https://image.tmdb.org/t/p/w300${this.props.image}`
        })
        console.log("type image:", typeof this.state.image)
    }

    render() {
        console.log("propssss", this.props)
        return (
            <div
                className="container-fluid">
                <section className="col-5  text-left border border-warning mb-4 pt-4">
                    <img src={this.state.image} className="imgcss"></img>
                    <h5 className="mt-2 color-title"><strong> {this.props.title}</strong></h5>
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

export default Card; */