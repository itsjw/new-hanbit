import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object,
    component: PropTypes.any,
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { component: Component, ...rest } = this.props

    return <Route {...rest} render={props => (<Component {...props} />)} />
  }
}

export default withRouter(ScrollToTop)
