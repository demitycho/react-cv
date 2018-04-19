import React, { Component } from 'react';
import AboutMeData from "../data/AboutMeData"
import { Header, Image, Segment } from 'semantic-ui-react'

const lower = {
  marginTop: "3.5em",
}
class AboutMe extends Component {
  render() {
    return(
      <Segment raised style={lower}>
        <Header size='large'>About Me</Header>
        <Image centered circular size='medium' src='https://i.imgur.com/2pMUrcD.jpg' />
        <Header as='h3' icon textAlign='center'>
          <Header.Content>
            {AboutMeData.name}
          </Header.Content>
        </Header>
        {AboutMeData.description1}
        <br/><br/>
        {AboutMeData.description2}
      </Segment>
      )
  }
}

export default AboutMe