import React, { Component } from 'react';

class List extends Component {

    render (){
        return(
<div onClick={this.props.onClick}>
    List
</div>
        )
    }
}
export default List;