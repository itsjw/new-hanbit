import React from 'react'
import PropTypes from 'prop-types'
import { palette } from 'styled-theme'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'

import { Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  background: ${palette('greyscale', 4)};

  cursor: pointer;
  color: ${palette('white', 0)};
  &:hover {
    border: 0;
  }
`

const InnerWrapper = styled.div`
  width: 100%;

  margin: 0.5em 0 0 1em;
  & > a {
    display: block;
    line-height: 1.8;
    color: ${palette('greyscale', 1)};
    &:hover {
      border: 0;
    }
  }
`

const CollapsibleNav = ({
  subNavs,
  name,
  expanded,
  onCollapseNav,
  onExpandNav,
}) => {
  return (
    <Wrapper onClick={() => expanded ? onCollapseNav(name) : onExpandNav(name)}>
      <h1>{name}</h1>
      {
        expanded ? (
          <Icon
            name="remove"
            fill={palette('white', 0)}
            small
            clickable
          />
        ) : (
          <Icon
            name="add"
            fill={palette('white', 0)}
            small
            clickable
          />
        )
      }
      {
        /* eslint-disable react/no-array-index-key */
        expanded && <InnerWrapper>
          {
            subNavs.map((name, i) => {
              return (
                <Link key={i} to="/">{ name }</Link>
              )
            })
          }
        </InnerWrapper>
      }
    </Wrapper>
  )
}

CollapsibleNav.defaultProps = {
  subNavs: ['some', 'default', 'navs'],
  name: 'default category',
}

CollapsibleNav.propTypes = {
  subNavs: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onCollapseNav: PropTypes.func,
  onExpandNav: PropTypes.func,
}

export default CollapsibleNav
