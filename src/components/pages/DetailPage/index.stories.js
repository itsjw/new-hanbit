// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { DetailPage } from 'components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('DetailPage', module)
  .add('DetailPage: 1', () => (
    <DetailPage match={{ params: { id: 0 } }} />
  ))
  .add('DetailPage: 2', () => (
    <DetailPage match={{ params: { id: 1 } }} />
  ))
  .add('DetailPage: 3', () => (
    <DetailPage match={{ params: { id: 2 } }} />
  ))
  .add('DetailPage: 4', () => (
    <DetailPage match={{ params: { id: 3 } }} />
  ))
