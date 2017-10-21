import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { isPending } from 'redux-saga-thunk'
import { withRouter } from 'react-router-dom'
import { signUpRequest } from 'store/actions'

import { LocalLogin } from 'components'

class LocalLoginContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    onSignUpRequest: PropTypes.func,
    history: PropTypes.object,
    pending: PropTypes.bool,
  }

  submit = ({ email, password }) => {
    const { onSignUpRequest, history } = this.props
    onSignUpRequest(email, password)
    .then(({ result }) => {
      return result.email && history.push('/')
    })
    .catch((error) => {
      throw new SubmissionError(error)
    })
  }
  render() {
    const { handleSubmit, pending } = this.props
    const { submit } = this
    return (
      <LocalLogin
        handleSubmit={handleSubmit}
        submit={submit}
        disabled={pending}
      />
    )
  }
}

const mapStateToProps = state => ({
  pending: isPending(state, 'signup'),
})

const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (email, password) => dispatch(signUpRequest(email, password)),
})

const connected = connect(mapStateToProps, mapDispatchToProps)(LocalLoginContainer)

export default withRouter(reduxForm({
  form: 'local-login',
})(connected))

