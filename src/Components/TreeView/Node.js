import React, { Component } from 'react';
import Inner from './Inner';
import Children from './Children';

class Node extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props){
        super(props);
        console.log("Node",this.props);
        const { name } = this.props;
        this.state = {
            name: name,
            isExpand: false
        }

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
        const { name, children } = this.props;
        console.log("Node",children);
        return (
            <div className='Node'>
                <Inner name={name} isExpand={this.state.isExpand} toggleExpand={this.handleToggleExpand}/>
                { typeof(children) === typeof([]) && this.state.isExpand ? <Children childrens={children}/> : "" }
            </div>
        )
    }
}

export default Node;