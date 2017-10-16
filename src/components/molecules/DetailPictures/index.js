import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from 'components'

const Img = Image.extend`
  width: 100%;
  height: ${props => !props['data-small'] && '75%'};
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 1em;
`

// for ssr
const MockImage = styled.div`
  width: 100%;
  height: 100%;
`

const PreviewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  margin-top: 1em;
  > ${Img} {
    width: 33%;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`

const DetailPictures = ({
  lookingNthPicture,
  onChangePicture,
  pictures,
}) => {
  if (typeof window !== 'undefined') {
    return (
      <Wrapper>
        <Img src={pictures[lookingNthPicture]} />
        <PreviewWrapper>
          {
            /* eslint-disable react/no-array-index-key */
            pictures.map((picture, i) => {
              return (
                <Img key={i} src={picture} data-small onClick={() => onChangePicture(i)} />
              )
            })
          }
        </PreviewWrapper>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <MockImage />
    </Wrapper>
  )
}

DetailPictures.propTypes = {
  lookingNthPicture: PropTypes.number,
  onChangePicture: PropTypes.func,
  pictures: PropTypes.array,
}

export default DetailPictures
