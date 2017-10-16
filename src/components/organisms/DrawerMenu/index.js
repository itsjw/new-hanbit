import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { palette } from 'styled-theme'

import {
  SocialButtonNavigation,
  MenuNavigation,
} from 'components'

const Wrapper = styled.nav`
  position: fixed;
  width: ${({ width }) => width}px;
  height: 100vh;
  background-color: ${palette('greyscale', 4)};
  z-index: 100;

  transform: ${({ opened, width }) => !opened && `translateX(-${width}px)`};
  transition: transform 0.3s linear;

  // make scrollable drawer in landscape mode
  @media (max-height: 410px) {
    max-height: 100%;
    overflow-y: auto;
  }
`

const Header = styled.header`
  color: ${palette('white', 0)};
  background-color: ${palette('black', 0)};
  padding: 1em 2em;
  height: 55px;
`

const Footer = styled.section`
  border-top: 1px solid ${palette('black', 0)};
  padding: 1.5em 0;
  margin: 0 2em;
  color: ${palette('greyscale', 1)};
  line-height: 1.5;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: ${({ width }) => width}px;
  width: 100vw;
  height: 100%;
  background-color: ${palette('greyscale', 1)};
  opacity: 0.7;
`

const DrawerMenu = ({
  close,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>MENU</Header>
      <MenuNavigation />
      <SocialButtonNavigation />
      <Footer>
        <p>통신 판매업자: xxx</p>
        <p>신고 번호: 101-000-2323-2424</p>
        <p>주소: 서울시 서초구 양재동</p>
        <p>전화: 021-2323-2424</p>
      </Footer>
      { props.opened && <Background onClick={close} {...props} /> }
    </Wrapper>
  )
}

DrawerMenu.propTypes = {
  width: PropTypes.number,
  opened: PropTypes.bool,
  close: PropTypes.func,
}

export default DrawerMenu
