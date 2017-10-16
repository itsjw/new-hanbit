// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { Header } from 'containers'
import { PageTemplate, Hero, ProductCardList } from 'components'
import { mockProducts } from 'helpers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />} padding={'0 2em'}>
      <ProductCardList title={'What\'s new?'} products={mockProducts} />
      <ProductCardList title={'Weekly Choices'} products={mockProducts} />
    </PageTemplate>
  )
}

export default HomePage
