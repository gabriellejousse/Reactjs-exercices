import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>

                <ul className="list-group ">
                    {this.props.items.map((elem, index) => {
console.log("my elem (objet avec prix et nom)= ", elem)
console.log("my index (index de l'array items)= ", index)
                    return <li key={index} className="list-group-item d-flex justify-content-between align-items-center"> {elem.name} <span className="badge badge-primary badge-pill">{elem.price} €</span></li> 
                    
                    }
                    )}
                   
                </ul>
                

            </div>
        )
    }
}
export default List;