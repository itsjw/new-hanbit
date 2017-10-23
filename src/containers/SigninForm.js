import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { isPending } from 'redux-saga-thunk'
import { withRouter } from 'react-router-dom'
import { signInRequest } from 'store/actions'

import { SigninForm } from 'components'

class SigninFormContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    onSignInRequest: PropTypes.func,
    history: PropTypes.object,
    pending: PropTypes.bool,
    formWidth: PropTypes.number,
    changeView: PropTypes.func,
  }

  static defaultProps = {
    formWidth: 30,
  }

  submit = ({ email, password }) => {
    const { onSignInRequest, history } = this.props
    onSignInRequest(email, password)
    .then(({ result }) => {
      console.log(result)
      return result.email && history.push('/')
    })
    .catch((error) => {
      console.log(error)
      throw new SubmissionError(error)
    })
  }

  render() {
    const { handleSubmit, pending, formWidth, changeView } = this.props
    const {
      submit,
    } = this
    return (
      <SigninForm
        handleSubmit={handleSubmit}
        submit={submit}
        disabled={pending}
        formWidth={formWidth}
        changeView={changeView}
      />
    )
  }
}

const mapStateToProps = state => ({
  pending: isPending(state, 'signup'),
})

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (email, password) => dispatch(signInRequest(email, password)),
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SigninFormContainer)

export default withRouter(reduxForm({
  form: 'signin',
})(connected))
