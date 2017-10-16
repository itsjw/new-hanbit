import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: ${({ size }) => size}em;
  color: ${({ color }) => color};
  font-weight: 400;
`

const Heading = (props) => {
  return (
    <StyledHeading {...props} />
  )
}

Heading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.func,
}

export default Heading
