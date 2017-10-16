import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette } from 'styled-theme'

const rotate360 = keyframes`
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
`

const Circle = styled.div`
  border: 5px solid ${palette('greyscale', 1)};
  border-radius: 50%;
  border-top-color: #fff;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${rotate360} 1s ease-in-out infinite;
`

const Wrapper = styled.div`
  display: inline-block;
  padding: 1em;
  text-align: center;
  & > ${Circle} {
      margin: auto;
      margin-bottom: 20px;
  }
`

const Spinner = ({
  size,
  text,
}) => {
  return (
    <Wrapper>
      <Circle size={size} />
      <p>{text}</p>
    </Wrapper>
  )
}

Spinner.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string,
}

export default Spinner
