import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProductCardList } from 'components'
import { mockProducts } from 'lib'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

storiesOf('ProductCardList', module)
  .add('default', () => (
    <ProductCardList products={mockProducts} />
  ))
  .add('with title', () => (
    <ProductCardList title="I'm title!" products={mockProducts} />
  ))
