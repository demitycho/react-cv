import React, { Component } from 'react';
import MyComment from './MyComment.js';
import CommentInputField from "./CommentInputField";
import '../App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Header, Comment } from 'semantic-ui-react'

class CommentsSection extends Component {
  componentWillReceiveProps(nextProps) {
      // if (this.props.location.key !== nextProps.location.key) {
    this.props.allPostsQuery.refetch()
    this.setState({ posts : this.props.allPostsQuery.allPosts});
  }
  createPost = () => {
    this.props.allPostsQuery.refetch()
  }
  render() {
    return (
      <Comment.Group className="Comments-Section">
        <Header as='h2' dividing>Comments</Header>
          {this.props.allPostsQuery.allPosts && this.props.allPostsQuery.allPosts.map(post => (
            <MyComment
                key={post.id}
                post={post}
                refresh={() => this.props.allPostsQuery.refetch()}
            />
          ))}
          <CommentInputField createPost = {this.createPost} />
      </Comment.Group>
    );
  }
}
const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts {
      id
      comment
      name
    }
  }
`
const CommentsSectionWithQuery = graphql(ALL_POSTS_QUERY, {
    name: 'allPostsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(CommentsSection)

export default CommentsSectionWithQuery;
