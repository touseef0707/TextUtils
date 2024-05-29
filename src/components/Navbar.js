import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  let navBg = "light";
  let navText = "light";

  if (props.mode === 'dark') {
    navBg = "dark";
    navText = "dark";
  }
  else if (props.mode === 'blue') {
    navBg = "primary";
    navText = "dark";
  }
  else if (props.mode === 'green') {
    navBg = "success";
    navText = "dark";
  }
  else if (props.mode === 'grey') {
    navBg = "secondary";
    navText = "dark";
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${navText} bg-${navBg}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
              <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button> */}
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="blue" onChange={props.handleToggleMode}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Blue Mode</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="green" onChange={props.handleToggleMode}/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Green Mode</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="grey" onChange={props.handleToggleMode}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Grey Mode</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="dark" onChange={props.handleToggleMode}/>
                  <label className="form-check-label" htmlFor="inlineRadio4">Dark Mode</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="light" onChange={props.handleToggleMode}/>
                  <label className="form-check-label" htmlFor="inlineRadio5">Light Mode</label>
                </div>
              </form>
            </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}
