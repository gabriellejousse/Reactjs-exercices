import React from 'react';
import Card from './movie/Card';

class PopularBattle extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            currentPage: 1
        }
    }


    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4c561e1052ec5f9e4f2a10d686800761")
            .then(res => res.json())
            .then(json => {
                console.log("fetch : ", fetch(''))
                console.log("json dans le fetch : ", json);


                this.setState({
                    movies: json.results[1]
                })

                console.log("this.state.movies : ", this.state.movies)
                //console.log("title + overview: ", this.state.movies[0].original_title, this.state.movies[0].overview);
                //console.log(json.results[0].original_title, json.results[0].overview, json.results[0].poster_path)



            });
    }
   

    render() {
     console.log("dkdkkdkdkd", this.state.movies)
        return (
            <div>
                <h4> Popular Battle</h4>
                <Card data={this.state.movies}></Card>
                <Card data={this.state.movies}></Card>


            </div>
        )
    }
}


export default PopularBattle;