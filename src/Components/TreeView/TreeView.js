import React, { Component } from 'react';
import Root from './Root';
import Data from './ExampleData';

class TreeView extends Component {

    render() {
        return (
            <div>
                <h1>TreeView</h1>
                <Root data={Data}/>
            </div>
        )
    }
}

export default TreeView;