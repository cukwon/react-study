import React, { Component } from 'react';
import CommentTrmplate from "./CommentTemplate";
import Data from "./Data";
import Root from "./Root";

const checkId = ( id, comment ) => {
    let flag = false;
    console.log('input', comment);
    console.log('comments', comment.get('comments'))
    if( comment.get('comments') !== undefined ) {
        for ( const comment of comment.get('comments')) {
            checkId( id , comment );
        }
    }
    if( comment.get('id') === id )
        flag = true
    console.log('output',flag)
    return flag
};

/**
 * Comments를 감싸는 컴포넌트
 */
class CommentsWrapper2 extends Component {

    id = 15;
    state = { data : Data };

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
    }


    handleInput = (id, e) => {
        const { data } = this.state;
        // 인덱스를 찾아야함
        console.log(id)
        // const index = checkId(id, data);
        // console.log(index);

        // 배열을 변경해야함

        // 상태를 바꿔야함
        // this.setState({
        //
        // })
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
                    <Root data={this.state.data} onChange={this.handleInput}/>
                </CommentTrmplate>
            </div>
        )
    }
}
export default CommentsWrapper2;