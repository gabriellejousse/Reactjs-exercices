import React from 'react';
import './css/bootstrap.min.css';
import './css/styles.css';


class App extends React.Component {

state = {
  inputValidEmail: false,
  inputValidPassword: false
}



  render() {
    return (
      <form className="col-md-6">
        <h1> Login</h1>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="" 
          className= {this.state.inputValidEmail ? "form-control is-invalid" : "form-control is-valid"}
           id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default App;
