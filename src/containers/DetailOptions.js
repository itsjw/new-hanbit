import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromProducts } from 'store/selectors'
import { addAmount, removeAmount } from 'store/actions'

import { DetailOptions } from 'components'

const DetailOptionsContainer = props => <DetailOptions {...props} />

DetailOptionsContainer.propTypes = {
  productId: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  shortDescription: PropTypes.string,
  amount: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string),
  onAddAmount: PropTypes.func,
  onRemoveAmount: PropTypes.func,
}

const mapStateToProps = (state, { productId }) => ({
  name: fromProducts.getName(state, productId),
  price: fromProducts.getPrice(state, productId),
  shortDescription: fromProducts.getShortDescription(state, productId),
  amount: fromProducts.getAmount(state, productId),
  options: fromProducts.getOptions(state, productId),
})

const mapDispatchToProps = (dispatch, { productId }) => ({
  onAddAmount: () => dispatch(addAmount(productId)),
  onRemoveAmount: () => dispatch(removeAmount(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailOptionsContainer)
