import React, { Component } from 'react'
import { Image, Item } from 'semantic-ui-react'

class Credential extends Component {
  render(){
    return(
      <Item>
        <Item.Content>
          <Item.Header as='a'>{this.props.credential.jobName}</Item.Header>
          <Item.Extra>{this.props.credential.jobLocation}</Item.Extra>
          <Item.Meta>{this.props.credential.jobDescription}</Item.Meta>
          <Item.Description>
            <ul>
              {this.props.credential.jobPoints.map(point =>
                <li>{point}</li>
              )}
            </ul>
          </Item.Description>
        </Item.Content>
      </Item>

    )
  }
}

export default Credential