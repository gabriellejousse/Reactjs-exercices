import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>
                {console.log(this.props.listAddItem)}
                <ul>
                    <li>{this.props.listAddItem}</li>
                </ul>
            </div>
        )
    }
}
export default List;