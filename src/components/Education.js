import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Education extends Component {
  render(){
    return(
      <Item>
        <Item.Content>
          <Item.Header as='a'>{this.props.education.level}</Item.Header>
          <Item.Extra>{this.props.education.school}</Item.Extra>
          <Item.Meta>{this.props.education.jobDescription}</Item.Meta>
          <Item.Description>
            <ul>
              {this.props.education.points.map(point =>
                  <li>{point}</li>
              )}
            </ul>
          </Item.Description>
        </Item.Content>
      </Item>
    )
  }
}

export default Education