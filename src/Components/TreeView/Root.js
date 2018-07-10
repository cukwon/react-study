import React, { Component } from 'react';
import Node from './Node';
class Root extends Component {

    render() {
        return (
            <div>
                <p>root</p>
                <Node/>
            </div>
        )
    }
}

export default Root;