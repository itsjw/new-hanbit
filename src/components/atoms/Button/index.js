import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { palette } from 'styled-theme'

const StyledButton = styled.button`
  border: 1px solid ${({ color }) => color};
  padding: 0.5em 1em;
  width: ${({ size, full }) => !full && size}em;
  font-size: 1em;
  background: ${({ transparent, color }) => transparent ? 'rgba(255, 255, 255, 0)' : color};
  color: ${({ color, transparent }) => transparent ? color : palette('white', 0)};
  width: ${({ full }) => full && '100%'};
`

const Button = (props) => {
  return (
    <StyledButton {...props} />
  )
}

Button.propTypes = {
  color: PropTypes.func,
  size: PropTypes.number,
  transparent: PropTypes.bool,
  full: PropTypes.bool,
}

export default Button
