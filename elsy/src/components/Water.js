import React, { Component } from 'react';
import Icon from './core/Icon';

class Water extends Component {

    render () {
        return(
            <div className="box col-md-2 col-6 col-lg-6 white">
                <span class="icon" style={{ color: "#3A85FF" }}>
                    <Icon name="local_drink"></Icon>
                </span>

                <p> Water </p>
            </div>
        )
    }
}
export default Water;