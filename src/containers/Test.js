import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isBrowser, isServer } from 'config'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromMessage } from 'store/selectors'
import { updateMessage, messageReadRequest } from 'store/actions'

class Test extends Component {
  static propTypes = {
    message: PropTypes.string,
    updateMessage: PropTypes.func.isRequired,
    readMessage: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
  }
  static defaultProps = {
    failed: true,
  }
  componentWillMount() {
    const { readMessage, hasServerState, setServerState, cleanServerState } = this.props

    if (!hasServerState) {
      if (isServer) {
        readMessage().then(setServerState, setServerState)
      } else {
        readMessage()
      }
    } else if (isBrowser) {
      cleanServerState()
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const payload = this.formInput.value
    this.props.updateMessage(payload)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable no-return-assign */}
          <input type="text" placeholder="message" ref={input => this.formInput = input} />
          <input type="submit" value="SUBMIT" />
        </form>
        message from store: {this.props.message}
        <p>{this.props.loading ? 'loading...' : 'loading ended!'}</p>
      </div>
    )
  }
}

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(
  state => ({
    message: fromMessage.getMessage(state),
    loading: isPending(state, 'r'),
    failed: hasFailed(state, 'r'),
  }),
  dispatch => ({
    updateMessage: payload => dispatch(updateMessage(payload)),
    readMessage: () => dispatch(messageReadRequest()),
  })
)(Test))
