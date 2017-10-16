import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Header } from 'components'

const HeaderContainer = props => <Header {...props} />

HeaderContainer.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
