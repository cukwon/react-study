import React, { Component } from 'react';
import Form from "./Form";
import Node from "./Node";

/**
 * 최상위 댓글 컴포넌트 ( 댓글을 가지고 있지 않음 )
 */
class Root extends Component {
    render () {
        const { data, onChange, onDelete, onToggle, onCreate, onKeyPress} = this.props;
        const CommentsList = ( data.get('comments') ? data.get('comments').map(comment => (<Node key={comment.get('id')} data={comment} onChange={onChange} onDelete={onDelete} onToggle={onToggle} onCreate={onCreate} onKeyPress={onKeyPress}/>)) : undefined)
        console.log('Root',data.get('id'))
        return (
            <div className='root-wrapper' style={{padding:' 2px 10px'}}>
                { data.get('comments') &&
                    <div className='list-wrapper'>
                        {CommentsList}
                    </div>
                }
                <div className='form-wrapper'>
                    <Form id={data.get('id')} value={data.get('value')} btnName='등록' onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress} />
                </div>
            </div>
        )
    }
}



export default Root;