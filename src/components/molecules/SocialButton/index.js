import React from 'react'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'

import { Icon } from 'components'

const SocialButton = ({
  name,
}) => {
  return (
    <Icon name={name} clickable fill={palette('white', 0)} hoverFill={palette('greyscale', 1)} />
  )
}

SocialButton.propTypes = {
  name: PropTypes.string,
}

export default SocialButton
