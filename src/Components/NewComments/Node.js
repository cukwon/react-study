import React, { Component } from 'react';
import Form from "./Form";

/**
 * 댓글을 표현하는 컴포넌트
 */
class Node extends Component {

    /**
     *  재-렌더링 여부를 결정함
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        if( this.props === nextProps ) {
            return false
        }
        return true
    }

    /**
     * Render ( 렌더링 함수 )
     * @returns {*}
     */
    render () {
        const { data, onChange, onDelete, onToggle, onCreate, onKeyPress } = this.props;
        console.log('Node',data.get('id') );
        const CommentsList = ( data.get('comments') ?
            data.get('comments').map(comment => (<Node key={comment.get('id')} data={comment} onChange={onChange} onDelete={onDelete} onToggle={onToggle} onCreate={onCreate} onKeyPress={onKeyPress}/>)) :
            undefined );
        return (
            <div className='Node-wrapper' style={{padding:'2px 0 2px 20px'}}>
                <div className='comment-wrapper' style={{padding:'2px 15px'}}>
                    <div className='text-wrapper' style={{padding:'2px 10px',border: '1px solid #22b8cf'}}>
                        <span>{data.get('comment')}&nbsp;</span>
                        <span><button onClick={()=>{onToggle(data.get('id'))}}>댓글</button></span>
                        <span style={{float:"right"}}><button onClick={() => onDelete(data.get('id'))}>삭제</button></span>
                    </div>
                </div>
                { data.get('comments') &&
                    <div className='list-wrapper'>
                        {CommentsList}
                    </div>
                }
                { data.get('Adding') &&
                <div className='form-wrapper'>
                    <Form id={data.get('id')} value={data.get('value')} onChange={onChange} btnName='등록' onCreate={onCreate} onKeyPress={onKeyPress}/>
                </div>
                }
            </div>
        )
    }
}



export default Node;