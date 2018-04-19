import React, { Component } from 'react'
import CredentialData from '../data/CredentialData.js'
import Credential from './Credential.js'
import { Header, Item, Segment } from 'semantic-ui-react'

class Credentials extends Component {
  render(){
    return(
      <Segment>
        <Header size='large'>Credentials</Header>
        <Item.Group divided>
          {CredentialData.map(credential => (
            <Credential
              key={credential.id}
              credential={credential}
            />
          ))}
        </Item.Group>
      </Segment>
    )
  }
}

export default Credentials