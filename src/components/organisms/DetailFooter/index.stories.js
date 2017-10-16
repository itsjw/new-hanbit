import React from 'react'
import { storiesOf } from '@storybook/react'
import { DetailFooter } from 'components'
import styled from 'styled-components'
import { globalStyle } from '../../themes/globalStyle'

globalStyle

// to look nice
const Wrapper = styled.div`
  width: 80%;
  margin: 10em auto;
`

storiesOf('DetailFooter', module)
  .add('default', () => (
    <Wrapper>
      <DetailFooter />
    </Wrapper>
  ))
