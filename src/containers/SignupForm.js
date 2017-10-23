import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { isPending } from 'redux-saga-thunk'
import { withRouter } from 'react-router-dom'
import { signUpRequest } from 'store/actions'

import { SignupForm } from 'components'

class SignupFormContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    onSignUpRequest: PropTypes.func,
    history: PropTypes.object,
    pending: PropTypes.bool,
    formWidth: PropTypes.number,
    changeView: PropTypes.func,
    endStep: PropTypes.func,
  }

  static defaultProps = {
    formWidth: 30,
  }

  submit = ({ email, password }) => {
    const { onSignUpRequest, history } = this.props
    onSignUpRequest(email, password)
    .then(({ result }) => {
      console.log(result)
      return result.email && history.push('/')
    })
    .catch((error) => {
      console.log(error)
      throw new SubmissionError(error)
    })
  }

  goNextStep = (e) => {
    e.preventDefault()
    this.props.endStep()
  }
  render() {
    const {
      handleSubmit,
      pending,
      formWidth,
      changeView,
    } = this.props
    const {
      submit,
      goNextStep,
    } = this
    return (
      <SignupForm
        handleSubmit={handleSubmit}
        submit={submit}
        goNextStep={goNextStep}
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
  onSignUpRequest: (email, password) => dispatch(signUpRequest(email, password)),
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)

export default withRouter(reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
})(connected))

