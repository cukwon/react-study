import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from "./router/App";

class Root extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

export default Root;
