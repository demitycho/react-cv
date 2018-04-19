import React, { Component } from 'react';
import AboutMeData from "./AboutMeData"
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