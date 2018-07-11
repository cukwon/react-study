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
            isExpand: false // 펼침 여부
        }

    }

    /**
     *  펼침 여부를 변경
     */
    handleToggleExpand = () => {
        const { isExpand } = this.state;
        this.setState({
            isExpand: !isExpand
        });
    };

    /**
     * Render
     * @returns {*}
     */
    render() {
        const { name, children } = this.props;
        console.log("Node",children);
        return (
            <div className='Node'>
                <Inner name={name} isExpand={this.state.isExpand} toggleExpand={this.handleToggleExpand}/>
                { children !== undefined && this.state.isExpand ? <Children childrens={children}/> : "" }
            </div>
        )
    }
}

export default Node;