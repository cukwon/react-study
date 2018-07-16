import React, { Component } from 'react';
import Comment from "./Comment";

class List extends Component {


    render () {
        const { comments } = this.props;
        let id = 0;
        console.log('List',comments);
        const CommentsList = (comments ? comments.map(comment => (<Comment
            key={++id}
            state = {comment}
            comment={comment.get('comment')}
            comments={comment.get('comments')}/>)) : undefined)
        return (
            <div>
                <div>
                    {CommentsList}
                </div>
            </div>
        )
    }
}
export default List;