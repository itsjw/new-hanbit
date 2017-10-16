import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import { icons } from './icons'

const Style = styled.span`
  // if there is no specific size passed as prop, then set it to default
  width: ${({ small }) => small ? size('smallIcon') : size('icon')};
  height: ${({ small }) => small ? size('smallIcon') : size('icon')};
  display: inline-block;
  fill: ${({ fill }) => fill}; 
  cursor: ${({ clickable }) => clickable && 'pointer'};
  &:hover svg {
    fill: ${({ hoverFill }) => hoverFill};
    transition: fill 0.3s ease-in-out;
  }
`

const Icon = props => (
  <Style {...props} onClick={props.onClick}>
    { icons[props.name] && icons[props.name]() }
  </Style>
)

Icon.propTypes = {
  name: PropTypes.string,
  hoverFill: PropTypes.func,
  fill: PropTypes.func,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  small: PropTypes.bool,
}

export default Icon
