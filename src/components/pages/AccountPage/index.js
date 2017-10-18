// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { Header, LocalLogin } from 'containers'
import { PageTemplate } from 'components'

const AccountPage = () => {
  return (
    <PageTemplate header={<Header />} padding={'0 2em'}>
      <LocalLogin />
    </PageTemplate>
  )
}

export default AccountPage
