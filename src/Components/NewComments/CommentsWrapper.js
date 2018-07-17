import React, { Component } from 'react';
import {Map, List} from 'immutable'
import CommentTrmplate from "./CommentTemplate";
import Data from "./Data";
import Root from "./Root";

var flag = false;
var key = 15;

const checkId = ( index, id, comment, path ) => {
    //console.log('input', comment);
    let nextIndex = 0;
    // 경로에 넣음
    if(flag !== true)
        path.push(index);
    // 자식이 있는지 확인 후 자식부터 확인한다.
    if( comment.get('comments') !== undefined && !flag) {
        for ( const subComment of comment.get('comments')) {
            path = checkId( nextIndex++, id , subComment, path );
        }
    }
    // 같은 아이디인지 확인
    if( comment.get('id') === id && !flag) {
        flag = true;
        //console.log(comment.get('id'),'output',flag)
        return path;
    }
    // 결과를 반환
    if(flag === true) {
        return path
    } else {
        path.pop()
        return path
    }
};

const findIndex= ( id, data ) => {

    flag = false;

    // id의 위치를 찾음
    const indexs = checkId(0, id, data, []);

    // 실제 경로를 제작 ( 루트 제거 및 속성값 추가 )
    let newIndex = ['comments'];
    for(const index of indexs.slice(1)) {
        newIndex.push(index);
        newIndex.push('comments');
    }

    // 실제 경로 반환
    return newIndex.slice(0,newIndex.length-1);
};

/**
 * Comments를 감싸는 컴포넌트
 */
class CommentsWrapper2 extends Component {

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
        const index = findIndex(id, data);

        // 배열을 변경해야함
        //console.log('change', data.getIn(index));
        const NextData = data.updateIn(index,item => item.set('value',e.target.value));

        // 상태를 바꿔야함
        this.setState({
            data: NextData
        })
    };

    handleRemove = ( id ) => {
        const { data } = this.state;

        const index = findIndex( id, data );

        //console.log('delete', data.getIn(index));
        const nextData = data.removeIn(index)

        this.setState({
            data : nextData
        })
    };

    handleToggle = ( id ) => {
        const { data } = this.state;

        const index = findIndex( id, data );

        console.log('update', data.getIn(index));
        const nextData = data.updateIn(index,item => item.set('Adding', !item.get('Adding')))

        this.setState({
            data : nextData
        })
    };

    handleCreate = ( id ) => {
        const { data } = this.state;

        const index = findIndex( id, data );

        console.log('Create', data.getIn(index));
        let nextData = data.updateIn(
            index,item => item.set(
                'comments',
                (item.get('comments')?item.get('comments'):List([])).push( Map({id:key++,value:"", Adding:false, comment:item.get('value')}))
            )
        );
        nextData = nextData.updateIn(index,item => item.set('value', ""));

        this.setState({
            data : nextData
        })
    };

    handleKeyPress = (id, e) => {
        if (e.key === 'Enter') {
            this.handleCreate(id);
        }
    }


    /**
     * Render
     * @returns {*}
     */
    render () {
        //console.log("render wrapper");
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
                    <Root data={this.state.data} onChange={this.handleInput} onToggle={this.handleToggle} onDelete={this.handleRemove} onCreate={this.handleCreate} onKeyPress={this.handleKeyPress}/>
                </CommentTrmplate>
            </div>
        )
    }
}
export default CommentsWrapper2;