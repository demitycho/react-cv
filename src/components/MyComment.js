import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

const styles = {
    avatar: {
      margin: ".2em 10px 0",
    }
}
class MyComment extends Component {
    render() {
      return (
        <Comment>
          <Comment.Content>
            <Comment.Avatar style={styles.avatar} src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' />
            <Comment.Author>{this.props.post.name}</Comment.Author>
            <Comment.Text>{this.props.post.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    }
}

export default MyComment;