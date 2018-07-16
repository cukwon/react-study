import React, { Component } from 'react';
import CommentTrmplate from "./CommentTemplate";
import Node from "./Node";
import Data from "./Data";
import Root from "./Root";

/**
 * Comments를 감싸는 컴포넌트
 */
class CommentsWrapper2 extends Component {

    id = 15;
/**
 * Constructor
 * @param props
 */
constructor(props) {
    super(props);
}


handleInputBox = (id) => {

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
        fontFamily: 'sans-serif',
        background: '#f9f9f9'
    };
    return (
        <div className='Wrapper' style={style}>
            <CommentTrmplate >
                <Root data={Data}/>
            </CommentTrmplate>
        </div>
    )
}
}
export default CommentsWrapper2;