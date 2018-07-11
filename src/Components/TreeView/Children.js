import React, { Component } from 'react';
import Node from './Node';

class Children extends Component {

    render() {
        const style = {
            padding:"0px 0px 0px 20px"
        }
        const { childrens } = this.props;
        console.log("Children", childrens)
        const nodeList = childrens.map(children => (<Node name={children.name} children={children.children}/>));
        return (
            <div className='Childrens' style={style}>
                {nodeList}
            </div>
        )
    }
}

export default Children;