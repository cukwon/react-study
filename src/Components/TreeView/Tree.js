import React, { Component } from 'react';
import Node from './Node';

class Tree extends Component { // 루트 노드

    /**
     * Constructor
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * Render
     * @returns {*}
     */
    render() {
        const style = {  // 인라인 스타일
            textAlign:"left" // 좌측 정렬
        };

        return (
            <div className='tree' name="" style={style} >
                <Node TreeData={this.props.TreeData}/>
            </div>
        )
    }
}

export default Tree;