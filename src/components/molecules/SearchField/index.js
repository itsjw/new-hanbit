import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'

import { Input, Icon } from 'components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & > span {
    position: absolute;
    &[name="search"] {
      top: 0;
      left: 0;
    }
    &[name="close"] {
      top: 0;
      right: 0;
    }
  }
`

const SearchField = () => {
  return (
    <Wrapper className="search">
      <Icon name="search" small />
      <Input type="text" placeholder="검색: 한빛안경" font={0.8} transparent indented />
      <Icon name="close" small />
    </Wrapper>
  )
}

SearchField.propTypes = {}

export default SearchField
