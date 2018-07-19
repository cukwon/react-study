import React, { Component } from 'react';
import { Map, List } from 'immutable';
import logo from '../logo.svg'
import '../App.css'

class Header extends Component {

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    This is a private study space. We will continue to implement additional features.
                </p>
            </div>
        )
    }
}

export default Header;