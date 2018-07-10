import React, { Component } from 'react';
import Inner from './Inner';
import Children from './Children';

class Node extends Component {
    
    render() {
        return (
            <div>
                <Inner/>
                <Children/>
            </div>
        )
    }
}

export default Node;