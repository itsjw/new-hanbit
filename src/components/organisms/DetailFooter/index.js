import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Tab, ProductCardList } from 'components'
import { DetailTab } from 'containers'

const InnerWrapper = styled.div`
  padding: 2em;
  width: 100%;
  min-height: 10em;
  text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // 관련상품 바디
  > div:nth-child(4) {
    padding-top: 1em;
  }
`

const Tabs = styled.div`
  border-top: 1px solid ${palette('greyscale', 0)};
  display: flex;
  width: 100%;
`

const DetailFooter = ({
  productId,
  numberOfReviews,
  fullDescription,
  related,
  detailTabName,
  activeTab,
}) => {
  return (
    <Wrapper>
      <Tabs>
        {
          /* eslint-disable react/no-array-index-key */
          detailTabName.map((name, i) => {
            if (name === '리뷰') {
              return <DetailTab key={i} name={`${name}(${numberOfReviews})`} productId={productId} />
            }
            return <DetailTab key={i} name={name} productId={productId} />
          })
        }
      </Tabs>
      <InnerWrapper>
        {
          /* eslint-disable no-nested-ternary */
          activeTab === '제품 상세' ?
          fullDescription :
          !numberOfReviews ? (
            <p>리뷰가 존재하지 않습니다.</p>
          ) : (
            <p>리뷰!</p>
          )
        }
      </InnerWrapper>
      <Tabs>
        <Tab name="관련상품" />
      </Tabs>
      <InnerWrapper>
        <ProductCardList products={related} />
      </InnerWrapper>
    </Wrapper>
  )
}

DetailFooter.propTypes = {
  productId: PropTypes.number,
  numberOfReviews: PropTypes.number,
  fullDescription: PropTypes.string,
  related: PropTypes.arrayOf(PropTypes.object),
  activeTab: PropTypes.string,
  detailTabName: PropTypes.arrayOf(PropTypes.string),
}

export default DetailFooter
