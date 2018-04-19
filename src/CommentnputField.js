import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql} from 'react-apollo';

class CommentnputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleCommentChange(e) {
    this.setState({comment: e.target.value});
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.name +  ' ' + this.state.comment);
    e.preventDefault();
  }

  handlePost = async (e) => {
    const {comment, name} = this.state
    await this.props.createPostMutation({variables: {comment, name}})
    this.props.createPost();
  }

  render() {
    return (
        <form>
          Name: <input type="text" name="FirstName" onChange={this.handleNameChange}/>
          Comment: <input type="text" name="LastName" onChange={this.handleCommentChange}/>
          <button type="button"  onClick={this.handlePost}>Comment!</button>
        </form>
    );
  }
}

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($comment: String!, $name: String!) {
    createPost(comment: $comment, name: $name) {
      id
    }
  }
`

const CreateCommentWithMutation = graphql(CREATE_POST_MUTATION, {name: 'createPostMutation'})(CommentnputField)

export default CreateCommentWithMutation;
