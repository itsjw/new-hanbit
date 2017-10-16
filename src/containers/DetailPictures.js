import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changePicture } from 'store/actions'
import { fromProducts } from 'store/selectors'

import { DetailPictures } from 'components'

const DetailPicturesContainer = props => <DetailPictures {...props} />

DetailPicturesContainer.propTypes = {
  productId: PropTypes.number,
  lookingNthPicture: PropTypes.number,
  onChangePicture: PropTypes.func,
  pictures: PropTypes.array,
}

const mapStateToProps = (state, { productId }) => ({
  lookingNthPicture: fromProducts.getLookingNthPicture(state, productId),
  pictures: fromProducts.getPictures(state, productId),
})

const mapDispatchToProps = (dispatch, { productId }) => ({
  onChangePicture: index => dispatch(changePicture(productId, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPicturesContainer)
