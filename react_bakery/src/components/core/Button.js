import React, { Component } from 'react';
import Add from '../Add';
import PropTypes from 'prop-types';


class Button extends Component {

    render() {
        return (
            <div className="container">
                <nav className="justify-content-center row">
                    <button className={this.props.isSelected ? 'btn btn-outline-primary active mx-2 mb-4 btn-sm' : 'btn btn-sm btn-outline-primary mx-2 mb-4'}
                        children="" isselected="" onClick={this.props.onClick} type="button"
                    >{this.props.name}</button>
                </nav>
            </div>
        )
    }
}

Button.propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    name: PropTypes.string,
}
Button.defaultProp = {
    isSelected: true,
    onClick: () => {},
    name: "article name",
}

export default Button;