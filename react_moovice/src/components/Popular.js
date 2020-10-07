import React from 'react';
import Card from './movie/Card';

class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4c561e1052ec5f9e4f2a10d686800761")
            .then(res => res.json())
            .then(json => {
                console.log("fetch : ", fetch(''))
                console.log("json dans le fetch : ", json);

                // on veut push les données de l'API dans l'array vide this.state.movies :
                let arrMovies = this.state.movies
                arrMovies.push(json.results)

                this.setState({
                    movies: arrMovies
                })

                console.log("this.state.movies : ", this.state.movies)
            });
    }


    render() {
        return (
            <div>
                <h4> Popular </h4>
                <Card> </Card>
            </div>
        )
    }
}
export default Popular;