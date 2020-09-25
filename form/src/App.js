import React from 'react';
import './css/bootstrap.min.css';
import './css/styles.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      rememberMe: false
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }


  validateEmail(email) {
    // regex de l'e-mail a respecter
  }

  validatePassword(password){
    // regex du password a respecter
  }

  onChangeEmail(event) {

    event.preventDefault()
    this.setState({
      email: event.target.value
    })
    console.log(this.state.email)

    if (this.validateEmail(this.state.email)) {
      this.setState({
        emailValid: true
      })
    } else {
      this.setState({
        emailValid: false
      })
    }

  }

  onChangePassword(evt) {
    evt.preventDefault()
    this.setState({
      password: evt.target.password
    })
    console.log(this.state.password)

    if (this.validatePassword(this.state.password)) {
      this.setState({
        passwordValid: true
      })
    } else {
      this.setState({
        passwordValid: false
      })
    }

  }

  render() {
    return (
      <form className="col-md-6">
        <h1> Login</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input value={this.state.email} onChange={this.onChangeEmail} type="email" className=""
            className={this.state.validateEmail ? "form-control is-invalid" : "form-control is-valid"}
            id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input value={this.state.password} onChange={this.onChangePassword} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default App;
