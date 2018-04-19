import React, { Component } from 'react'

class Credential extends Component {
  render(){
    return(
      <div>
        {this.props.credential.jobName} - {this.props.credential.jobLocation}
      </div>
    )
  }
}

export default Credential