import React, { Component } from 'react';
import Inner from './Inner';
import Children from './Children';
import Style from './Style';

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

    handleChildren = (TreeData) => {
        let Childrens =[];
        if(this.state.isExpand) {
            console.log(typeof(TreeData.Children), typeof([]))
            if (typeof(TreeData.children) === typeof([])) {
                Childrens = TreeData.children.map(children => (<Children TreeData={children}/>));
                console.log("if", TreeData.children)
            }
        }
        return Childrens;
    }

    render() {
        const { TreeData } = this.props;
        console.log(TreeData);
        return (
            <div className='Node' style={Style.children}>
                <Inner name={TreeData.name} toggleExpand={this.handleToggleExpand}/>
                {this.handleChildren(TreeData)}
            </div>
        )
    }
}

export default Node;