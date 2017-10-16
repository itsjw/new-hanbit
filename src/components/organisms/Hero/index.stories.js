import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from 'components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('Hero', module)
  .add('default', () => (
    <Hero />
  ))
