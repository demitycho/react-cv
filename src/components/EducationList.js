import React, { Component } from 'react'
import EducationData from '../data/EducationData.js'
import Education from './Education.js'

class EducationList extends Component {
  render(){
    return(
      <div>
        {EducationData.map(education => (
          <Education
            key={education.id}
            education={education}
          />
        ))}
      </div>
    )
  }
}

export default EducationList