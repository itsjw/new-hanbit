import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}em;
  height: ${({ size }) => size}em;
  background-color: ${({ bg }) => bg};
  border-radius: ${({ round }) => round && '50%'};
`

const IconButton = ({
  name,
  fill,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Icon name={name} fill={fill} clickable />
    </Wrapper>
  )
}

IconButton.propTypes = {
  name: PropTypes.string,
  round: PropTypes.bool,
  bg: PropTypes.func,
  size: PropTypes.number,
  fill: PropTypes.func,
}

export default IconButton
