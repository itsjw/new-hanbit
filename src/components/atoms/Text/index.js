import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledP = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}em;
`

const Text = ({
  ...props
}) => {
  return (
    <StyledP {...props} />
  )
}

Text.defaultProps = {
  color: palette('black', 0),
}

Text.propTypes = {
  color: PropTypes.func,
  size: PropTypes.number,
}

export default Text
