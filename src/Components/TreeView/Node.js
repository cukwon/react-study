import React, { Component } from 'react';
import Inner from './Inner';
import Children from './Children';

class Node extends Component {
    state = {
        isExpand: false
    };

    constructor(props){
        super(props);

    }

    handleToggleExpand = () => {
        const { isExpand } = this.state;
        this.setState({
            isExpand: !isExpand
        });
    };

    render() {
        const { TreeData } = this.props;
        console.log(TreeData);
        let Childrens =[];
        if(this.state.isExpand) {
            console.log(typeof(TreeData.Children), typeof([]))
            if (typeof(TreeData.children) === typeof([])) {
                Childrens = TreeData.children.map(children => (<Children TreeData={children}/>));
                console.log("if", TreeData.children)
            }
        }
        return (
            <div>
                <span><button onClick={this.handleToggleExpand}>➤</button></span>
                <Inner name={TreeData.name}/>
                {Childrens}
            </div>
        )
    }
}

export default Node;