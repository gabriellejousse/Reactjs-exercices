import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';
import Card from './components/movie/Card';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>

        <nav className="container-fluid">
          <ul className="row justify-content-between list-unstyled mx-5 ">
            <li> <strong> <Link to="/"> This week </Link> </strong> </li>
            <li> <strong> <Link to="/battle"> This week battle </Link> </strong> </li>
            <li> <strong> <Link to="/popular/"> Popular </Link> </strong> </li>
            <li> <strong> <Link to="/popular-battle/"> Popular battle </Link> </strong> </li>
            <li> <strong> <Link to="/my-list/"> My list</Link> </strong> </li>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/">
            <Discover></Discover>
          </Route>
          <Route exact path="/battle">
            <DiscoverBattle></DiscoverBattle>
          </Route>
          <Route exact path="/popular/">
            <Popular></Popular>
          </Route>
          <Route exact path="/popular-battle/">
            <PopularBattle></PopularBattle>
          </Route>
          <Route exact path="/my-list/">
            <MyList></MyList>
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;
