import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

const styles = {
    avatar: {
      margin: ".2em 10px 0",
    }
}
class MyComment extends Component {
    constructor(props){
      super(props);
      const min = 1;
      const max = 120;
      const rand = Math.floor(min + Math.random() * (max - min));
      this.state = ({random : rand});
    }
    render() {
      return (
        <Comment>
          <Comment.Content>
            <Comment.Avatar
                style={styles.avatar}
                src={`https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/${this.state.random.toString()}.png`}
            />
            <Comment.Author>{this.props.post.name}</Comment.Author>
            <Comment.Text>{this.props.post.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    }
}

export default MyComment;