import React, { Component } from 'react'
import EducationData from '../data/EducationData.js'
import Education from './Education.js'
import { Header, Icon, Item, Segment } from 'semantic-ui-react'

class EducationList extends Component {
  render(){
    return(
      <Segment padded="very">
        <Header size='large'>
          <Icon name="book" />
          Education
        </Header>
        <Item.Group divided>
          {EducationData.map(education => (
            <Education
              key={education.id}
              education={education}
            />
          ))}
        </Item.Group>
      </Segment>
    )
  }
}

export default EducationList