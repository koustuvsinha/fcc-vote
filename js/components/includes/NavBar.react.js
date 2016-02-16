/*
 * NavBar
 *
 * Navigation Bar
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {
  render() {
    return (
      <div className="ui menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    )
  }
}
