import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import { fromUser } from 'store/selectors'

const Protected = ({ component: Component, path, exact, isLoggedIn, ...rest }) => {
  return (
    <Route
      path={path}
      exact
      render={() => (
        isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...rest} />
        )
      )}
    />
  )
}

Protected.propTypes = {
  component: PropTypes.any,
  isLoggedIn: PropTypes.bool,
  path: PropTypes.string,
  exact: PropTypes.bool,
}

const mapStateToProps = state => ({
  isLoggedIn: fromUser.isLoggedIn(state),
})

export default connect(mapStateToProps, null)(Protected)

