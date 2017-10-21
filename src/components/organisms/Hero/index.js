import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import hero from 'static/hero.jpg'

import { Button, Heading, Nav, Image } from 'components'

const Wrapper = Image.extend`
  width: 100vw;
  height: 30em;
  background-position: start 0;

  // overide default hover effect
  &:hover {
    opacity: 1;
  }

  @media(max-width: 40em) {
    height: 20em;
  }

  @media(min-width: 60em) {
    height: 40em;
  }
`

// 서버에서 Image 객체를 활용할 수 없기 때문에 만듬
const MockWrapper = styled.img`
  width: 100vw;
  height: 40em;
  display: flex;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  padding: 1em;

  display: flex;
  flex-direction: column;

  > h1:first-child {
    margin-top: auto;
  }

  > a {
    margin-top: 0.5em;
  }

  @media(min-width: 40em) {
    padding: 2.5em;
    > h1 {
      margin-top: 0;
      font-size: 2em;
    }
    button {
      width: 12em;
    }
  }
`

const Hero = () => {
  if (typeof window !== 'undefined') {
    return (
      <Wrapper src={hero}>
        <InnerWrapper>
          <Heading size={1.5} color={palette('white', 0)} bold={1}>Good Design</Heading>
          <Heading size={1.5} color={palette('white', 0)} bold={1}>That feets you.</Heading>
          <Heading size={1.5} color={palette('white', 0)} bold={1}>Hanbit</Heading>
          <Nav to="/" data-hoverStyle="noHover">
            <Button color={palette('white', 0)} transparent>둘러보기</Button>
          </Nav>
        </InnerWrapper>
      </Wrapper>
    )
  }
  return <MockWrapper />
}

export default Hero

