import React, { Component } from 'react'
import EducationData from '../data/EducationData.js'
import Education from './Education.js'
import { Header, Item, Segment } from 'semantic-ui-react'
class EducationList extends Component {
  render(){
    return(
      <Segment>
        <Header size='large'>Education</Header>
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