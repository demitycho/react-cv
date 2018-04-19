import React, { Component } from 'react'

class Education extends Component {
  render(){
    return(
      <div>

        {this.props.education.school} - {this.props.education.location}
      </div>
    )
  }
}

export default Education