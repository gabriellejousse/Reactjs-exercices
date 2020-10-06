import React, { Component } from 'react';
import Add from '../Add';
import PropTypes from 'prop-types';


class Button extends Component {

    render() {
        return (
            <div className="">
                <nav className="">
                    <button className={this.props.isSelected ? 'btn-nav-active my-3 mx-2' : 'btn-nav my-3 mx-2'}
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