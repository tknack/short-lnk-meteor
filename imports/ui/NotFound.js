import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 - Page Not found !!!</h1>
        <p>We're unable to find that page</p>
        <Link className="button button--link" to="/">HEAD HOME</Link>
      </div>
  </div>
  )
}
