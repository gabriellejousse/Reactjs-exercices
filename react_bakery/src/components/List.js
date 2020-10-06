import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component {

    render() {
        return (
            <div onClick={this.props.onClick} className="col-4">
                <h4 className="text-center colorblue mt-2 mb-4"> Your food list :</h4>

                <ul className="list-group ">
                    {this.props.items.map((elem, index) => {

                        console.log("my elem (objet avec prix et nom)= ", elem)
                        console.log("my index (index de l'array items)= ", index)

                        return <li key={index} className="list-group-item d-flex justify-content-between">
                            <strong className="colorblue">{elem.itemName}</strong>
                            <span className="text-center  badge badge-color badge-pill">{elem.price} €</span>
                        </li>

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
    onClick: () => { }
}



export default List;