// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mockProducts } from 'helpers'

import {
  Header,
  DetailPictures,
  DetailOptions,
  DetailFooter,
} from 'containers'
import {
  PageTemplate,
} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80em;
  > div:first-child {
    height: 25em;
  }

  @media(min-width: 50em) {
    flex-wrap: wrap;
    flex-direction: row;
    > div:first-child {
      margin-right: 2em;
      margin-bottom: 2em;
    }
    > div:nth-child(2) {
      height: 20.75em;
      margin: 1em 0 2em 0;
    }
    > div:nth-child(-n + 2) {
      width: calc(50% - 1em);
    }
  }
  @media(min-width: 70em) {
    margin: 0 auto;
    > div:first-child {
      height: 40em;
    }
    > div:nth-child(2) {
      height: 29em;
    }
  }
`

const DetailPage = ({
  match,
}) => {
  const { id } = match.params

  // handle invalid ids
  if (!mockProducts[id]) {
    return <p>존재하지 않는 상품입니다.</p>
  }
  return (
    <PageTemplate header={<Header />} padding={'0 5em'}>
      <Wrapper>
        <DetailPictures productId={parseInt(id, 10)} />
        <DetailOptions productId={parseInt(id, 10)} />
        <DetailFooter productId={parseInt(id, 10)} />
      </Wrapper>
    </PageTemplate>
  )
}

DetailPage.propTypes = {
  match: PropTypes.object,
}

export default DetailPage
