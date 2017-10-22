// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'

import { Header, LocalLogin, FormSteps } from 'containers'
import { PageTemplate } from 'components'

const formWidth = 30

const Wrapper = styled.div`
  .form-steps {
    max-width: ${formWidth}em;
    margin: 0.5em auto 2em auto;
  }
`

const AccountPage = () => {
  return (
    <PageTemplate header={<Header />} padding={'0 2em'}>
      <Wrapper>
        <FormSteps />
        <LocalLogin formWidth={formWidth} />
      </Wrapper>
    </PageTemplate>
  )
}

export default AccountPage
