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
        console.log("this.state.movies render: ", this.state.movies)

        return (
            <div>
                <h4> Popular </h4>
                {this.renderMovies()}


            </div>
        )
    }
}


export default Popular;