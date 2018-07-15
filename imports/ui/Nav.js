import React from 'react'
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom'
import { onAuthChange } from '../routes/routes'

import Login from './Login'
import Signup from './Signup'
import Link from './Link'
import NotFound from './NotFound'

const unauthenticatedPages = ['/','/signup']
const authenticatedPages = ['/links']


// let pathName = ""
export default class Nav extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    Tracker.autorun(() => {
        const isAuthenticated = !!Meteor.userId() // transforme en booléen et passe à true
        const pathName = this.props.location.pathname
        const isUnauthenticatedPage = unauthenticatedPages.includes(pathName)
        const isAuthenticatedPage = authenticatedPages.includes(pathName)

        if (isUnauthenticatedPage && isAuthenticated) {
          this.props.history.push('/links');
        } else if (isAuthenticatedPage && !isAuthenticated) {
          this.props.history.push('/');
        }
        // console.log('isAuthenticated ', isAuthenticated)
    })
  }

  render () {
    // console.log(this.props.location.pathname)

    return(
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={Link} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}


// console.log(pathName)
