/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch
    const { projectName, ownerName } = this.props.data
    return (
    <div>
        <h1>FCC Voting App</h1>
        <h2>Select any one of the below votes to continue!</h2>
        <Link className="btn" to="/poll">Vote 1</Link> &nbsp;
        <Link className="btn" to="/readme">Setup</Link>
      </div>
    )
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage)
