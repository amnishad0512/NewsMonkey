import React, { Component } from 'react'
import spinner from "./loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" style={{marginTop:"8em"}}>
          <img src={spinner} alt="spinner" />
      </div>
    )
  }
}
