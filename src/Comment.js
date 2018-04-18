import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.post.name} - {this.props.post.comment}
            </div>
        );
    }
}

export default Comment;