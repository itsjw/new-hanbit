import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LocalLogin } from 'components'

class LocalLoginContainer extends Component {

  static propTypes = {}

  submit = () => {

  }
  render() {
    return (
      <LocalLogin />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LocalLoginContainer)