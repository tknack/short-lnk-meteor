import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

class Signup  extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        error: ''
      }
  }

  componentDidMount() {
    if (Meteor.userId()){
      this.props.history.push('/links');
    }
  }

  onSubmit (e) {
    e.preventDefault()

    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()

    if(password.length < 9) {
      return this.setState({ error: 'Password must be more than 8 char long'})
    }
    Accounts.createUser({email, password}, (err)=> {
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''})
      }
    })
  }

  render () {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join short Lnk</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account ?</Link>
        </div>
      </div>
    )
  }
}

export default Signup
