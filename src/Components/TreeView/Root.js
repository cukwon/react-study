import React, { Component } from 'react';
import Node from './Node';

class Root extends Component {
    state = {
        isExpand: false
    };

    constructor(props){
        super(props);
    }

    handleToggleExpand = () => {
        const { isExpand } = this.state;
        const toggledExpand = !isExpand;
        this.setState({
            isExpand: toggledExpand
        });
    }

    render() {
        const style = {
            textAlign:"left"
        };

        const { TreeData } = this.props;
        console.log(TreeData);
        let nodeList = [];
        if(this.state.isExpand) {
            nodeList = TreeData.children.map(data => (<Node TreeData={data}/>));
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