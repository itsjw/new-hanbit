import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Nav, Image } from 'components'

const ImageHeight = 15

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5em;
  height: ${ImageHeight + 5}em;
  background: ${palette('white', 0)};
  border-radius: 5px;
  flex-basis: 100%;
  
  @media(min-width: 40em) {
    flex-basis: 45%;
  }

  @media(min-width: 70em) {
    flex-basis: 30%;
  }

  @media(min-width: 100em) {
    flex-basis: 22%;
  }

  > a {
    width: 100%;
    height: 100%;
  }
`

// 서버사이드에서 Image 객체를 쓸 수 없기 때문에 로딩하는 동안 가짜 이미지를 불러옴
const MockImage = styled.div`
  width: 100%;
  height: ${ImageHeight}em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Img = Image.extend`
  height: ${ImageHeight}em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em 0.5em;
  line-height: 1.4;
  & > p {
    font-size: 1.2em;
    font-weight: 600;
    color: ${palette('greyscale', 3)};
    &:last-child {
      color: ${palette('greyscale', 1)};
      font-weight: 300;
    }
  }
`

const ProductCard = ({
  src,
  price,
  name,
  to,
}) => {
  if (typeof window !== 'undefined') {
    return (
      <Wrapper>
        <Nav to={to} data-hoverStyle="noHover">
          <Img src={src} />
          <BottomWrapper>
            <p>{name}</p>
            <p>￦{price}</p>
          </BottomWrapper>
        </Nav>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <MockImage />
    </Wrapper>
  )
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default ProductCard
