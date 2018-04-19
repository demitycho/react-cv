import React, { Component } from 'react'
import CredentialData from '../data/CredentialData.js'
import Credential from './Credential.js'
import { Header, Segment } from 'semantic-ui-react'

class Credentials extends Component {
  render(){
    return(
      <Segment>
        <Header size='large'>Credentials</Header>
        {CredentialData.map(credential => (
          <Credential
            key={credential.id}
            credential={credential}
          />
        ))}
      </Segment>
    )
  }
}

export default Credentials