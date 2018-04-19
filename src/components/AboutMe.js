import React, { Component } from 'react';
import AboutMeData from "../data/AboutMeData"
class AboutMe extends Component {
  render() {
    return(
      <div>
        {AboutMeData.name} -
        {AboutMeData.description}
      </div>
    )
  }
}

export default AboutMe