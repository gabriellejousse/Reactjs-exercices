import React, { Component } from 'react';

class Pay extends Component{

    render(){
        return(
<div onClick={this.props.onClick}>
    Pay
</div>
        )
    }
}
export default Pay;