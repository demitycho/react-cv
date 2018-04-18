import React, { Component } from 'react';
import Comment from './Comment.js';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CommentsSection extends Component {
    componentWillReceiveProps(nextProps) {
        // if (this.props.location.key !== nextProps.location.key) {
            this.props.allPostsQuery.refetch()

    }
  render() {
    return (
      <div className="Comments-Section">
        {this.props.allPostsQuery.allPosts && this.props.allPostsQuery.allPosts.map(post => (
          <Comment
              key={post.id}
              post={post}
              refresh={() => this.props.allPostsQuery.refetch()}
          />
        ))}
      </div>
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
