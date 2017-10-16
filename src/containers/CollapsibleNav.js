import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromNav } from 'store/selectors'
import { expandNav, collapseNav } from 'store/actions'

import { CollapsibleNav } from 'components'

const CollapsibleNavContainer = props => <CollapsibleNav {...props} />

CollapsibleNavContainer.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state, { name }) => ({
  expanded: fromNav.isExpanded(state, name),
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onCollapseNav: () => dispatch(collapseNav(name)),
  onExpandNav: () => dispatch(expandNav(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleNavContainer)
