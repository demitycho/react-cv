import React, { Component } from 'react';
import CommentSection from './components/CommentsSection.js';
import AboutMe from './components/AboutMe.js';
import Credentials from './components/Credentials.js';
import EducationList from './components/EducationList.js';
import './App.css';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';

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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
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
          >
            About Me
          </Menu.Item>

          <Menu.Item
              style={styles.item}
              name='Credentials'
              active={activeItem === 'credentials'}
              onClick={this.handleItemClick}
          >
            Credentials
          </Menu.Item>

          <Menu.Item
              style={styles.item}
              name='education'
              active={activeItem === 'educationlist'}
              onClick={this.handleItemClick}
          >
            Education
          </Menu.Item>
          <Menu.Item
              style={styles.item}
              name='comment'
              active={activeItem === 'comment'}
              onClick={this.handleItemClick}
          >
            Comment
          </Menu.Item>
        </Menu>
        <div style={styles.body}>
          <AboutMe />
          <Credentials />
          <EducationList />
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default App;
