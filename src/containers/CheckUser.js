import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import api from 'services/api'
import { checkUser } from 'store/actions'

class CheckUserContainer extends Component {

  static propTypes = {
    onCheckUser: PropTypes.func,
  }
  componentWillMount() {
    api.get('/user/me')
       .then(({ email }) => this.props.onCheckUser(email))
  }
  render() {
    return (
      <div />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onCheckUser: email => dispatch(checkUser(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckUserContainer)
