/*
 * VotingPage
 *
 * FCC Voting page
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class VotingPage extends Component {
	render() {
    return (
    <div>
        <h2>Voting question?</h2>

        <ul>
          <li>First option</li>
          <li>Second option</li>
          <li>Third option</li>
        </ul>

        <Link className="btn" to="/">Home</Link>
      </div>
    )
  }
}