import React, { Component } from 'react';
import Node from './Node';

class Root extends Component { // 루트 노드
    state = {
        isExpand: false // 펼치기
    };

    constructor(props){
        super(props);
    }

    handleToggleExpand = () => { // 펼치기 전환 ( 펼치기 <=> 닫기 )
        const { isExpand } = this.state;
        const toggledExpand = !isExpand;
        this.setState({
            isExpand: toggledExpand
        });
    };

    render() {
        const style = {  // 인라인 스타일
            textAlign:"left" // 좌측 정렬
        };

        const { TreeData } = this.props;
        console.log(TreeData);
        let nodeList = [];
        if(this.state.isExpand) {
            nodeList = TreeData.children.map(data => (<Node TreeData={data}/>)); // 자식노드 생성
        }
        return (
            <div style={style} >
                <span><button onClick={this.handleToggleExpand}>➤</button></span>
                <span>&nbsp;{TreeData.name}</span>
                {nodeList}
            </div>
        )
    }
}

export default Root;