import React from 'react';
import Card from './movie/Card';
import { API_KEY } from '../service/network';
import placeholder from '../img/placeholder.png'
import MyList from './MyList';

class PopularBattle extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            currentPage: 1
        }
        this.choseFilm = this.choseFilm.bind(this);
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
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300${elem.poster_path}` : placeholder
                        // attention, possible qu'on doive rajouter un / après le 300 dans l'url
                    }
                })
                //console.log("my movies", movies)
                this.setState({
                    movies //ou juste movies: movies
                })
                console.log("state", this.state)
            });
    }

    choseFilm(id) {
        //console.log("choseFilm", id)

        if(JSON.parse(localStorage.getItem('my-list'))){
            myList = JSON.parse(localStorage.getItem('my-list'))
        } 

        let myList =JSON.parse(localStorage.getItem('my-list')) ? JSON.parse(localStorage.getItem('my-list')) : []
 
        myList.push(id)
        localStorage.setItem('my-list', JSON.stringify(myList))
        
        console.log("list dans localStorage", myList);

        this.setState({
            currentPage: this.state.currentPage + 1
        })

        //return <MyList maListe={this.choseFilm(id)}></MyList>
    }

    render() {
        //console.log( "popular battle render: ",this.state)
        const {
            movies,
            currentPage
        } = this.state

        /*         const firstIndex = secondIndex - 1;
                const secondIndex = (currentPage * 2); */

        const firstMovie = movies[(currentPage - 1) * 2];
        const secondMovie = movies[(currentPage - 1) * 2 + 1];

        console.log("scndMovie :", secondMovie)
        console.log("firstMovie: ", firstMovie)

        return (
            <div className="row">
                <div className="col-6">
                    <button onClick={() => this.choseFilm(firstMovie.id)}>
                        <Card {...firstMovie}></Card>
                    </button>
                </div>
                <div className="col-6">
                    <button onClick={() => this.choseFilm(secondMovie.id)}>
                        <Card {...secondMovie}></Card>
                    </button>
                </div>

            </div>
        )

    }
}


export default PopularBattle;



/* import React from 'react';
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
                <Card>{this.state.movies}</Card>
                <Card data={this.state.movies}></Card>


            </div>
        )
    }
}


export default PopularBattle; */