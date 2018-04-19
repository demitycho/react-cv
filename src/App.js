import React, { Component } from 'react';
import CommentSection from './components/CommentsSection.js';
import AboutMe from './components/AboutMe.js';
import Credentials from './components/Credentials.js';
import EducationList from './components/EducationList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React CV</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AboutMe />
        <div>divider</div>
        <Credentials />
        <div>divider</div>
        <EducationList />
        <div>divider</div>
        <CommentSection />
      </div>
    );
  }
}

export default App;
