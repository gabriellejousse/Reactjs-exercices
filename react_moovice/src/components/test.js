import React from 'react';

class Quizz extends React.Component {


    constructor() {
        super();
        this.click = this.click.bind(this);

        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.setState({
            list: [1, 2, 3, 4]
        })
    }
    click() {
        console.log('Je suis clické');

        // obligé de ne pas faire directement un push dans la nouvelle variable,
        // sinon ça indiquera seulement la length de la liste
        //pareil pour les méthodes pop, shift...
        let newlist = this.state.list
        newlist.push(newlist.length + 1)
        this.setState({
            list: newlist
        })
    }
    render() {
        return (
            <div>
                {/* afficher dans une balise p tout les element de la list}*/}
                {this.state.list.map((elem, index) => {
                    return (<p key={index}> {elem} </p>)
                })}

                <button onClick={this.click}> Button </button>
            </div>
        )
    }

}

export default Quizz

