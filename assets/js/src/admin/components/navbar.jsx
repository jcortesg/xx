import React from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return(
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Obsevatorio TI</a>
            <button className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </header>
    )
  }
}
