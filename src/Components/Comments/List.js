import React, { Component } from 'react';
import Comment from "./Comment";

class List extends Component {


    render () {
        const { comments } = this.props;
        console.log('List',comments);
        const CommentsList = (comments ? comments.map(comment => (<Comment
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