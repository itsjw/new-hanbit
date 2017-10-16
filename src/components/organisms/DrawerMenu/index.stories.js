import React from 'react'
import { storiesOf } from '@storybook/react'
import { DrawerMenu } from 'components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('DrawerMenu', module)
  .add('default', () => (
    <DrawerMenu opened width={280} />
  ))
