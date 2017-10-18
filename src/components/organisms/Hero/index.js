import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import hero from 'static/hero.jpg'

import { Button, Heading, Nav, Image } from 'components'

const Wrapper = Image.extend`
  width: 100vw;
  height: 40em;
  position: relative;

  // small device
  @media(max-width: 30em) {
    height: 30em;
    background-position: 15% center;
  } 

  // huge device
  @media(min-width: 80em) {
    height: 50em;
  }

  // overide default hover effect
  &:hover {
    opacity: 1;
  }
`

// 서버에서 Image 객체를 활용할 수 없기 때문에 만듬
const MockWrapper = styled.img`
  width: 100vw;
  height: 40em;
  display: flex;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 15em;
  padding: 2em;
  height: 12em;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  margin-top: 18em;

  @media(min-width: 30em) {
    margin-left: 2em;
  } 

  @media(min-width: 70em) {
    width: 20em;
    margin-top: 25em;
  }
`

const Hero = () => {
  if (typeof window !== 'undefined') {
    return (
      <Wrapper src={hero}>
        <InnerWrapper>
          <Heading size={1.5} color={palette('white', 0)}>Good Design</Heading>
          <Heading size={1.5} color={palette('white', 0)}>That feets you.</Heading>
          <Heading size={1.5} color={palette('white', 0)}>Hanbit</Heading>
          <Nav to="/" data-hoverStyle="noHover">
            <Button color={palette('white', 0)} transparent full>둘러보기</Button>
          </Nav>
        </InnerWrapper>
      </Wrapper>
    )
  }
  return <MockWrapper />
}

export default Hero

