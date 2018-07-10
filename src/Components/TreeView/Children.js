import React, { Component } from 'react';
import Node from './Node'

class Children extends Component {

    render() {
        const { TreeData } = this.props;
        console.log(TreeData)
        return (
            <div>
                <Node TreeData={TreeData}/>
            </div>
        )
    }
}

export default Children;