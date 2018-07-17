import React from 'react';
import './css/TodoListTemplate.css';

/**
 * Comments의 모양을 잡아주는 템플릿
 * @param form      // 입력 부분
 * @param palette   // 팔래트 부분
 * @param children  // 리스트 출력 부분
 * @returns {*}
 * @constructor
 */
const CommentTrmplate = ({form, palette,children}) => {
        return (
            <div className='todo-list-template'>
                <div className='title'>
                    댓&nbsp;&nbsp;글
                </div>
                <div className='node-wrapper' style={{textAlign:'left'}}>
                    {children}
                </div>
            </div>
        )
};

export default CommentTrmplate;