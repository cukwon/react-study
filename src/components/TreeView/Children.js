import React, { Component } from 'react';
import Node from './Node';

class Children extends Component {

    /**
     * 자식들을 각각 노드에 담아서 리스트로 반환
     * @returns {childrenNodeList}
     */
    addChildrenList = () => {
        const {childrens} = this.props;
        const nodeList = childrens.map(children => (<Node name={children.name} children={children.children}/>));
        return nodeList
    };

    /**
     * Render
     * @returns {*}
     */
    render() {
        const style = {
            padding:"0px 0px 0px 20px"
        }
        const { childrens } = this.props;
        console.log("Children", childrens)
        const nodeList = childrens.map(children => (<Node name={children.name} children={children.children}/>));
        return (
            <div className='Childrens' style={style}>
                {this.addChildrenList()}
            </div>
        )
    }
}

export default Children;