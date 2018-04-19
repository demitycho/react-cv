import React, { Component } from 'react';
import AboutMeData from "../data/AboutMeData"
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import weihao from '../images/Tan_Wei_Hao.png'
const lower = {
  marginTop: "3.5em",
}
class AboutMe extends Component {
  render() {
    return(
      <Segment raised style={lower} padded="very">
        <Header size='large'>
          <Icon name="student" />
          About Me
        </Header>
        <Image centered circular size='small' src={weihao} />
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