import React, { Component } from 'react'
import CredentialData from '../data/CredentialData.js'
import Credential from './Credential.js'

class Credentials extends Component {
  render(){
    return(
      <div>
        {CredentialData.map(credential => (
          <Credential
            key={credential.id}
            credential={credential}
          />
        ))}
      </div>
    )
  }
}

export default Credentials