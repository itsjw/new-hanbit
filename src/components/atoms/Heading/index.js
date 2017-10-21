import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: ${({ size }) => size}em;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold * 100};
`

const Heading = (props) => {
  return (
    <StyledHeading {...props} />
  )
}

Heading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.func,
  bold: PropTypes.number,
}

export default Heading
