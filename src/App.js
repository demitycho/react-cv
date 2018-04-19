import React, { Component } from 'react';
import CommentSection from './components/CommentsSection.js';
import AboutMe from './components/AboutMe.js';
import Credentials from './components/Credentials.js';
import EducationList from './components/EducationList.js';
import './App.css';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  root: {
    flexGrow: 1,
  },
  item: {
    textAlign: "center",
    width: "25%",
    paddingLeft: "8%",
  },
  body: {
    paddingLeft: "5%",
    paddingRight: "5%",
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleItemClick(e, { name }) {

  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <Menu>
          <Menu.Item
              style={styles.item}
              name='About Me'
              active={activeItem === 'aboutme'}
              onClick={this.handleItemClick}
              as="string"
          >
            <Link className="test1" to="aboutme" spy={true} smooth={true} duration={1000} >About Me</Link>
          </Menu.Item>
          <Menu.Item
              style={styles.item}
              name='Credentials'
              active={activeItem === 'credentials'}
              onClick={this.handleItemClick}
              as="string"
          >
            <Link className="test1" to="credentials" spy={true} smooth={true} duration={1000} >Credentials</Link>
          </Menu.Item>
          <Menu.Item
              style={styles.item}
              name='education'
              active={activeItem === 'educationlist'}
              onClick={this.handleItemClick}
              as="string"
          >
            <Link className="test1" to="education" spy={true} smooth={true} duration={1000} >Education</Link>
          </Menu.Item>
          <Menu.Item
              style={styles.item}
              name='comment'
              active={activeItem === 'comment'}
              onClick={this.handleItemClick}
              as="string"
          >
            <Link className="test1" to="comments" spy={true} smooth={true} duration={1000} >Comments</Link>
          </Menu.Item>
        </Menu>
        <div style={styles.body}>
          <Element name="aboutme" className="element" >\
            <AboutMe />
          </Element>

          <Element name="credentials" className="element" >
            <Credentials />
          </Element>

          <Element name="education" className="element" >
            <EducationList />
          </Element>

          <Element name="comments" className="element" >
            <CommentSection />
          </Element>
        </div>
      </div>
    );
  }
}

export default App;
