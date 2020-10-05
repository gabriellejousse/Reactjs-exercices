import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>

                <ul className="list-group ">
                    {this.props.items.map((elem, index) => {
                        console.log("my elem (objet avec prix et nom)= ", elem)
                        console.log("my index (index de l'array items)= ", index)
                        return <li key={index} className="list-group-item d-flex justify-content-between align-items-center"> 
                        {elem.itemName} <span className="badge badge-primary badge-pill">{elem.price} €</span></li>

                    }
                    )}
                    {console.log(this.props.items.map)}

                </ul>


            </div>
        )
    }
}

List.propTypes = {
    onClick: PropTypes.func
}

List.defaultProps = {
    onClick: () => {}
}



export default List;