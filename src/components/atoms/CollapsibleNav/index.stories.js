import React from 'react'
import { storiesOf } from '@storybook/react'
import { CollapsibleNav } from 'components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('CollapsibleNav', module)
  .add('default', () => (
    <div style={{ width: 280 }}>
      <CollapsibleNav expanded />
    </div>
  ))
  .add('expanded === false', () => (
    <div style={{ width: 280 }}>
      <CollapsibleNav />
    </div>
  ))
  .add('custom name and sub navs', () => (
    <div style={{ width: 280 }}>
      <CollapsibleNav
        name="custom name"
        subNavs={['custom1', 'custom2', 'custom3']}
        expanded
      />
    </div>
  ))
