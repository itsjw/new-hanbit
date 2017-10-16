import React from 'react'
import { storiesOf } from '@storybook/react'
import { DetailOptions } from 'containers'
import styled from 'styled-components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

// to look nice
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

storiesOf('DetailOptions', module)
  .add('productId: 1', () => (
    <Wrapper>
      <DetailOptions productId={1} />
    </Wrapper>
  ))
