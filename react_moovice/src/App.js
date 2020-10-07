import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

        <nav>
          <ul>
            <li> <Link to="/"> This week </Link></li>
            <li> <Link to="/battle"> This week battle </Link></li>
            <li> <Link to="/popular/"> Popular </Link></li>
            <li> <Link to="/popular-battle/"> Popular battle </Link></li>
            <li> <Link to="/my-list/"> My list</Link></li>
          </ul>
        </nav>
        <Card></Card>
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
