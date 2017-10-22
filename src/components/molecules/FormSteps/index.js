import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Text, Icon } from 'components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    width: calc(100% - 3.8em);
    left: 1.9em;
    top: 27%;
    position: absolute;
    content: "";
    border-bottom: 3px solid ${palette('greyscale', 1)};
  }
  .steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

const PointSize = 1.8

const Point = styled.div`
  background-color: ${({ current, i }) => current === i ? palette('black', 0) : palette('greyscale', 1)};
  width: ${PointSize}em;
  height: ${PointSize}em;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;  
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    margin-bottom: 0.5em;
  }
`

const FormSteps = ({
  names,
  current,
}) => {
  return (
    <Wrapper className="form-steps">
      <div className="steps">
        {
          names.map((name, i) => {
            return (
              <Step key={i}>
                <Point current={current} i={i}>
                  <Icon name={i < current ? 'done' : ''} fill={palette('white', 0)} />
                </Point>
                <Text>{name}</Text>
              </Step>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

FormSteps.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.number,
}

export default FormSteps
