import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import CounterContainer from "./containers/CounterContainer";

class App extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        const style = {
            backgroundColor:'black',
            padding: '12px',
            color:'white',
            fontSize: '16px'
        };
        return (
            <div className= 'App'>
                <CounterContainer/>
            </div>
        );
    }
}

export default App;
