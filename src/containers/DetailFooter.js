import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromProducts, fromTab } from 'store/selectors'
import { setDefaultTab } from 'store/actions'

import { DetailFooter } from 'components'

class DetailFooterContainer extends Component {
  componentWillMount() {
    const { productId, onSetDefaultTab } = this.props
    onSetDefaultTab(productId)
  }
  render() {
    const { props } = this
    return (
      <DetailFooter {...props} />
    )
  }
}

DetailFooterContainer.propTypes = {
  numberOfReviews: PropTypes.number,
  fullDescription: PropTypes.string,
  related: PropTypes.arrayOf(PropTypes.object),
  detailTabName: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.string,
  productId: PropTypes.number.isRequired,
  onSetDefaultTab: PropTypes.func,
}

const mapStateToProps = (state, { productId }) => ({
  numberOfReviews: fromProducts.getNumberOfReviews(state, productId),
  fullDescription: fromProducts.getFullDescription(state, productId),
  related: fromProducts.getRelated(state, productId),
  detailTabName: fromTab.getDetailTabName(state),
  activeTab: fromTab.getActiveTabName(state, productId),
})

const mapDispatchToProps = (dispatch, { productId }) => ({
  onSetDefaultTab: () => dispatch(setDefaultTab(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailFooterContainer)
