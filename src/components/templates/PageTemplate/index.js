// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${palette('white', 1)};
`

const Content = styled.section`
  width: 100%;
  padding: 0.5em;
  padding-top: ${({ hero }) => !hero && 54}px;
  @media(min-width: 40em) {
    padding: ${({ padding }) => padding};
    padding-top: ${({ hero }) => !hero && 54}px;
  }
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      {header}
      {hero}
      <Content {...props} hero={hero}>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
  padding: PropTypes.string,
}

export default PageTemplate
