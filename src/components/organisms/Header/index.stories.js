import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'containers'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ))
