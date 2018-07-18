import React, { Component } from 'react';
import Tree from './Tree';
import Data from './ExampleData';

class TreeView extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        return (
            <div>
                <h1>TreeView</h1>
                <Tree TreeData={Data}/>
            </div>
        )
    }
}

export default TreeView;