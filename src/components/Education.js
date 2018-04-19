import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Education extends Component {
  render(){
    return(
      <Item>
        {this.props.education.school} - {this.props.education.location}
      </Item>
    )
  }
}

export default Education