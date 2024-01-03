import React, { Component } from 'react'

export class FooterComponent extends Component {
    constructor(prop){
        super(prop)
        this.state={

        }
    }
  render() {
    return (
      <div>
        <footer className='footer'>
            <span>All Rights reserved</span>
        </footer>
      </div>
    )
  }
}

export default FooterComponent