import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromStep } from 'store/selectors'
import {
  setDefaultStep,
} from 'store/actions'

import { FormSteps } from 'components'

class FormStepsContainer extends Component {
  static propTypes = {
    setDefault: PropTypes.func,
  }
  componentWillMount() {
    this.props.setDefault()
  }
  render() {
    const { props } = this
    return (
      <FormSteps {...props} />
    )
  }
}

const mapStateToProps = state => ({
  names: fromStep.getNames(state),
  current: fromStep.getCurrent(state),
})

const mapDispatchToProps = dispatch => ({
  setDefault: () => dispatch(setDefaultStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormStepsContainer)
