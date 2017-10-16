import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { SocialButton } from 'components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  padding: 1em 0;
  margin: 0 2em;
  border-top: 1px solid ${palette('black', 0)};
  color: ${palette('greyscale', 1)};
  & > span {
    margin-right: 1em;
  }
`

const SocialButtonNavigation = () => {
  return (
    <Wrapper>
      <SocialButton name="facebook" />
      <SocialButton name="instagram" />
    </Wrapper>
  )
}

export default SocialButtonNavigation
