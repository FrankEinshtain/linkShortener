import React, { Component } from 'react'

class LinkCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }
  }
  handleSubmit (e) {
    e.preventDefault()
    // console.log(this.refs.inputLink.value)
    Meteor.call('links.insert', this.refs.inputLink.value, (error) => {
      if (error) {
        this.setState({ error: 'Gimme a valid URL, biatch!' })
      } else {
        this.setState({ error: '' })
        this.refs.inputLink.value = ''
      }
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <label>Link to Shorten</label>
          <input ref='inputLink' className='form-control' />
        </div>
        <div className='text-danger'>{this.state.error}</div>
        <button className='btn btn-primary'>Short It!</button>
      </form>
    )
  }
}

export default LinkCreate
