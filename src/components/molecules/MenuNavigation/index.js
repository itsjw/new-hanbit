import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Nav } from 'components'
import { CollapsibleNav } from 'containers'

const Wrapper = styled.section`
  width: calc(100% - 4em);
  padding: 1em 0 1.5em 0;
  margin: 0 2em;
  
  & > * {
    margin-bottom: 1em;
  }
`

const MenuNavigation = () => {
  return (
    <Wrapper>
      <CollapsibleNav
        name="카테고리1"
        subNavs={['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']}
        expanded={false}
      />
      <CollapsibleNav
        name="카테고리2"
        subNavs={['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']}
      />
      <Nav
        to="/account"
        name="LOGIN"
        data-color={palette('white', 0)}
        data-hoverStyle="transition"
        data-hoverColor={palette('greyscale', 1)}
      />
      <Nav
        to="/contact"
        name="CONTACT US"
        data-color={palette('white', 0)}
        data-hoverStyle="transition"
        data-hoverColor={palette('greyscale', 1)}
      />
    </Wrapper>
  )
}

export default MenuNavigation
