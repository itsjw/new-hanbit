import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'

const Wrapper = styled(Link)`
  display: block;
  color: ${props => props['data-color'] || palette('black', 0)};
  &:hover {
    border: ${props => (props['data-hoverStyle'] === 'transition' || props['data-hoverStyle'] === 'noHover') && 0};
    color: ${props => props['data-hoverColor']};
    transition: color 0.3s linear;
  }
`

/* eslint-disable no-unused-vars-rest/no-unused-vars */
const Nav = ({
  to,
  name,
  children,
  ...props
}) => {
  return (
    <Wrapper to={to} {...props}>
      {name || children}
    </Wrapper>
  )
}

Nav.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.func,
  hoverStyle: PropTypes.oneOf([
    'underline', 'transition', 'noHover',
  ]),
  hoverColor: PropTypes.func,
  children: PropTypes.node,
}

export default Nav
