import React from 'react';

class MyList extends React.Component {

    constructor() {
        super();
        this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    }

    getFromLocalStorage() {

        console.log(this.props.maListe)

    }

    render() {
        let maListe = this.props.maListe
        return (
            <div> {this.getFromLocalStorage()}
            </div>
        )
    }
}
export default MyList;