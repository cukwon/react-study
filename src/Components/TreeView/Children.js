import React, { Component } from 'react';
import Node from './Node';
import Style from './Style';

class Children extends Component {

    render() {
        const { TreeData } = this.props;
        console.log(TreeData)
        return (
            <div className='Childrens'>
                <Node TreeData={TreeData}/>
            </div>
        )
    }
}

export default Children;