import React from 'react'
import { storiesOf } from '@storybook/react'
import { LocalLogin } from 'components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('LocalLogin', module)
  .add('default', () => (
    <LocalLogin />
  ))
