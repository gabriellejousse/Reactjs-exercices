import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeContainer  from './containers/HomeContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
