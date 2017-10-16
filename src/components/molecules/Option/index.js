import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Heading, IconButton } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1em;
  }
  & input[type="number"] {
    width: 3em;
    text-indent: 1em;
    border: 0;
    font-size: 1em;
  }
  & > select {
    width: 10em;
    border: 0;
    background-color: ${palette('white', 0)};
    font-size: 1em;
  }
`

const Option = ({
  title,
  amount,
  options,
  add,
  remove,
}) => {
  switch (title) {
    case '수량':
      return (
        <Wrapper>
          <Heading size={1.3} color={palette('greyscale', 1)}>{title}</Heading>
          <input type="number" value={amount} readOnly />
          <IconButton
            name="add"
            bg={palette('white', 0)}
            fill={palette('greyscale', 1)}
            size={1.8}
            round
            onClick={add}
          />
          <IconButton
            name="remove"
            bg={palette('white', 0)}
            fill={palette('greyscale', 1)}
            size={1.8}
            round
            onClick={remove}
          />
        </Wrapper>
      )
    case '옵션':
      return (
        <Wrapper>
          <Heading size={1.3} color={palette('greyscale', 1)}>{title}</Heading>
          <select>
            {
              /* eslint-disable react/no-array-index-key */
              options.map((option, i) => <option key={i}>{option}</option>)
            }
          </select>
        </Wrapper>
      )
    default:
      return null
  }
}

Option.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string),
  add: PropTypes.func,
  remove: PropTypes.func,
}

export default Option
