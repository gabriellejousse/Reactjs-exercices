import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';

class HomeContainer extends React.Component {

    componentDidMount(){
        let getHomefunc = this.props.getHomeFunc
    }

    render() {
        return (
            <div>
              <Home></Home>
               
            </div>
        );
    }
}

export default HomeContainer;