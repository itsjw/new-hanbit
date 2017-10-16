import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromTab } from 'store/selectors'
import { selectTab } from 'store/actions'

import { Tab } from 'components'

const DetailTabContainer = props => <Tab {...props} />

DetailTabContainer.propTypes = {
  productId: PropTypes.number,
  onSelectTab: PropTypes.func,
  activeTab: PropTypes.string,
}

const mapStateToProps = (state, { productId }) => ({
  activeTab: fromTab.getActiveTabName(state, productId),
})

const mapDispatchToProps = (dispatch, { productId, name }) => ({
  onSelectTab: () => dispatch(selectTab(productId, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailTabContainer)
