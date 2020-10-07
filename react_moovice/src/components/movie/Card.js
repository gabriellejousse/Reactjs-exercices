import React from 'react';

class Card extends React.Component {

constructor (){
    super();

    this.state = {
        image : "",
        title : "",
        description : ""
    } 
    this.componentDidMount = this.componentDidMount.bind(this)
}

componentDidMount(){
this.setState({
    image: `https://image.tmdb.org/t/p/w300${this.state.image}`
})  

}

    render(){
        return(
            <div> Discover </div>
        )
    }
}
export default Card;