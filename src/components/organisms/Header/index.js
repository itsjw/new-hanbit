import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import {
  Nav,
  DrawerMenu,
  Icon,
  SearchField,
} from 'components'

const RightWrapper = styled.div`
  display: flex;
  & > *:not(*:last-child) {
    margin-right: 1em;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 54px;

  width: 100%;
  padding: 1em;
  position: fixed;
  z-index: 100;

  box-shadow: 0 3px 2px -2px ${palette('greyscale', 0)};
  background: rgba(255, 255, 255, 0.7);

  // 브랜드 로고 중간 정렬
  & > a[href="/"] {
    flex: 1;
    margin-left: 36%;
    @media(min-width: 40em) {
      margin-left: 42%;
    }
    @media(min-width: 70em) {
      margin-left: 48%;
    }
  }

  // 뒤로가기 버튼과 인풋 간 간격
  > .search {
    margin-left: 1em;
  }

  > ${RightWrapper} > .search {
    width: 10em;
  }

  @media(min-width: 50em) {
    > ${RightWrapper} > .search {
      width: 18em;
    }
  }
`

const Header = ({
  searching,
  onStartSearch,
  onCancelSearch,
  width,
  drawerOpened,
  onOpenDrawer,
  onCloseDrawer,
  isLoggedIn,
  logout,
  ...props
}) => {
  return (
    <div>
      {
        searching && width < 550 ? (
          <Wrapper {...props}>
            <Icon name="back" clickable small onClick={onCancelSearch} />
            <SearchField />
          </Wrapper>
        ) : (
          <Wrapper {...props}>
            <Icon name="hamburger" clickable small onClick={onOpenDrawer} />
            <Nav name="HANBIT" to="/" data-hoverStyle="noHover" />
            <RightWrapper>
              { width >= 550 ? <SearchField /> : <Icon name="search" clickable small onClick={onStartSearch} />}
              {
                isLoggedIn ? (
                  <Icon name="logout" clickable small onClick={logout} />
                ) : (
                  <Nav to="/account" data-hoverStyle="noHover" >
                    <Icon name="user" clickable small />
                  </Nav>
                )
              }
            </RightWrapper>
          </Wrapper>
        )
      }
      <DrawerMenu width={270} opened={drawerOpened} close={onCloseDrawer} />
    </div>
  )
}

Header.propTypes = {
  searching: PropTypes.bool,
  onStartSearch: PropTypes.func,
  onCancelSearch: PropTypes.func,
  width: PropTypes.number,
  drawerOpened: PropTypes.bool,
  onOpenDrawer: PropTypes.func,
  onCloseDrawer: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
}

export default Header

