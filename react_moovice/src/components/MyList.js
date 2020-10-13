import React from 'react';
import { API_KEY } from '../service/network';
import Card from './movie/Card';


class MyList extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            movieIds: JSON.parse(localStorage.getItem('my-list'))
        }

    }

    componentDidMount() {
        const theList = (ID) =>
        fetch(`http://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => data);

    // create an array of promises
    const promises = this.state.movieIds.map(ID => theList(ID));

    // execute all promises
    Promise.all(promises)
        .then((theList) => {
            // receives an array of responses

            //accès à tous les films dont les id sont dans le movieIds:
            console.log('tous les films du localstorage:', theList);

            //accès au premier film dont l'id est dans le movieIds:
            console.log('le premier film du local storage:', theList[0]);
        });

        this.setState({
            movies: theList
        })
        console.log("this.state.movies", this.state.movies)
    }

    render() {

        return (
            <div>
                <h1>{this.state.movieIds}</h1>
                <h2></h2>
            </div>
        )
    }
}
export default MyList;