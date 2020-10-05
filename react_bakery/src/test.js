import React, { Component } from 'react';
import Enfant from './components/Enfant';
class Parent extends Component {
​

strNum (num, str){
    console.log(num);
    console.log(str);
}

    render () {
        return (



            <div>
                <Enfant remonteeData={this.fctNumber(num, str)}> button</Enfant>
            </div>
        )
    }
}
​
export default App;
​
​
class Enfant extends React.Component {

data (num, str){
    const num = 1
    let str = "coucou"
}

    render() {
        return (
            <button remonteeData={() => this.data(num, str)}></button>
        )
    }
​
}
​
export default Enfant