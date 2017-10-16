import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ProductCard, Heading } from 'components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 1em;

  > h1 {
    width: 100%;
    display: block;
    margin-left: 0.5em;
  }
`

const ProductCardList = ({
  title,
  products,
}) => {
  return (
    <Wrapper>
      <Heading size={1.5}>{title}</Heading>
      {
        products.length ?
        products.map((product) => {
          const {
            productId,
            productPictures,
            productName,
            productPrice,
          } = product
          return (
            <ProductCard
              key={productId}
              src={productPictures[0]}
              name={productName}
              price={productPrice}
              to={`/detail/${productId}`}
            />
          )
        }) : <p>관련상품이 존재하지 않습니다.</p>
      }
    </Wrapper>
  )
}

ProductCardList.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductCardList
