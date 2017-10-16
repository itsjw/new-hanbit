import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${palette('greyscale', 1)};
  font-size: 0.8em;
  text-indent: 1.3em;
  background: ${({ transparent }) => transparent && 'rgba(255, 255, 255, 0)'};
`

const Input = ({
  ...props
}) => {
  return (
    <StyledInput {...props} />
  )
}

Input.propTypes = {
  transparent: PropTypes.bool,
}

export default Input
