import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1.5px solid ${palette('greyscale', 1)};
  font-size: ${({ font }) => font}em;
  text-indent: ${({ indented }) => indented && '1.3em'};
  background: ${({ transparent }) => transparent && 'rgba(255, 255, 255, 0)'};
  &:focus {
    border-bottom: 1.5px solid ${palette('black', 0)};
    transition: all 0.3s linear;
  }
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
  font: PropTypes.number,
  indented: PropTypes.bool,
}

export default Input
