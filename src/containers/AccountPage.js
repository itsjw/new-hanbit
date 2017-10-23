import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromStep } from 'store/selectors'
import { endStep } from 'store/actions'

import { AccountPage } from 'components'

class AccountPageContainer extends Component {

  static propTypes = {
    current: PropTypes.number,
    endStep: PropTypes.func,
  }

  state = {
    isLoginView: true,
  }
  changeView = () => {
    this.setState(prev => ({
      isLoginView: !prev.isLoginView,
    }))
  }

  render() {
    const { current, endStep } = this.props
    const { isLoginView } = this.state
    const { changeView } = this
    return (
      <AccountPage
        loginView={isLoginView}
        changeView={changeView}
        current={current}
        endStep={endStep}
      />
    )
  }
}

const mapStateToProps = state => ({
  current: fromStep.getCurrent(state),
})

const mapDispatchToProps = dispatch => ({
  endStep: () => dispatch(endStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPageContainer)
