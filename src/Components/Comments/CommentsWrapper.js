import React, { Component } from 'react';
import { Map, List } from 'immutable';
import CommentTrmplate from "./CommentTemplate";
import Form from "../Form";
import Node from "./Node";

/**
 * Comments를 감싸는 컴포넌트
 */
class CommentsWrapper extends Component {

    id = 0;

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: List([]),
            selected : '#343a40'
        }
    }

    /**
     * Render
     * @returns {*}
     */
    render () {
        console.log("render wrapper");
        const style = {
            margin: '0',
            padding: '70px',
            border: '2px solid #63e6be',
            fontfamily: 'sans-serif',
            background: '#f9f9f9'
        };
        return (
            <div className='Wrapper' style={style}>
                <CommentTrmplate form={ <Form value={this.state.value} btnName='등록'/> }>
                    <Node/>
                </CommentTrmplate>
            </div>
        )
    }
}
export default CommentsWrapper;