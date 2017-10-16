import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: ${({ activeTab, name }) => activeTab === name ? palette('white', 1) : palette('white', 0)};
  padding: 0.5em 1em;
  font-size: 1.3em;
  color: ${palette('greyscale', 3)};
  flex: 1;
  text-align: center;
  cursor: pointer;
`

const Tab = ({
  name,
  onSelectTab,
  activeTab,
}) => {
  return (
    <Wrapper onClick={onSelectTab} activeTab={activeTab} name={name}>
      {name}
    </Wrapper>
  )
}

Tab.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  onSelectTab: PropTypes.func,
}

export default Tab
