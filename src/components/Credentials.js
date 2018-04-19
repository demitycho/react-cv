import React, { Component } from 'react'
import CredentialData from '../data/CredentialData.js'
import Credential from './Credential.js'
import { Header, Icon, Item, Segment } from 'semantic-ui-react'

const styles = {
  padded: {
    marginTop: "2em",
    marginBottom: "2em",
  }
}
class Credentials extends Component {
  render(){
    return(
      <Segment padded="very" style={styles.padded}>
        <Header size='large'>
          <Icon name="user" />Credentials
        </Header>
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