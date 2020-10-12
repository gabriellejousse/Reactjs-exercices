import React from 'react';
import Card from './movie/Card';
import { API_KEY } from '../service/network';
import placeholder from '../img/placeholder.png'

class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []

        }
    }


    componentDidMount() {
        console.log("api-key: ", API_KEY)
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                //console.log("fetch : ", fetch(''))
                //console.log("json dans le fetch : ", json);

                const movies = json.results.map((elem) => {
                    //console.log("my elem: ", elem);

                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300${elem.poster_path}` : placeholder
                        // attention, possible qu'on doive rajouter un / après le 300 dans l'url
                    }
                })
                //console.log("my movies", movies)
                this.setState({
                    movies: movies //ou juste movies
                })
            });
    }


    render() {
        const {
            movies
        } = this.state

        return (
            <div>
                {movies.map((elem, index) => {
                    return <Card key={index} title={elem.title} description={elem.description} imgUrl={elem.imgUrl}></Card>
                })}
            </div>
        )
    }
}


export default Popular;






/* import React from 'react';
import Card from './movie/Card';
import { API_KEY } from '../service/network'

class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []

        }
    }


    componentDidMount() {
        console.log("api-key: ", API_KEY)
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                //console.log("fetch : ", fetch(''))
                console.log("json dans le fetch : ", json);


                this.setState({
                    movies: json.results
                })

                console.log("this.state.movies : ", this.state.movies)
                console.log("title: ", this.state.movies[0].original_title);




            });
    }

    renderMovies() {

        return this.state.movies.map((elem, index) => {
            console.log("elem: ", elem)
            console.log("index : ", index)
            //console.log("title dans map: ", elem.original_title)
            //console.log("description dans map: ", elem.overview)
            //console.log("img dans map: ", `https://image.tmdb.org/t/p/w300${elem.poster_path}`)

            return <Card
                key={index}
                image={elem.poster_path}
                title={elem.original_title}
                description={elem.overview}
            ></Card>

        })

    }


    render() {

        return (
            <div>
                <h4> Popular </h4>
                {this.renderMovies()}


            </div>
        )
    }
}


export default Popular; */



