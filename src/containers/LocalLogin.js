import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { LocalLogin } from 'components'

class LocalLoginContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
  }

  submit = ({ email, password }, dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'SS',
        email,
        password,
        resolve,
        reject,
      })
    }).catch((error) => {
      throw new SubmissionError(error)
    })
  }
  render() {
    const { handleSubmit } = this.props
    const { submit } = this
    return (
      <LocalLogin
        handleSubmit={handleSubmit}
        submit={submit}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const connected = connect(mapStateToProps, mapDispatchToProps)(LocalLoginContainer)

export default reduxForm({
  form: 'local-login',
})(connected)

