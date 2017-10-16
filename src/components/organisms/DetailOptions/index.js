import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Heading, Button, Option } from 'components'

const Wrapper = styled.div`
  margin: 2em 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > h1 {
    &:nth-child(2) {
      margin: 0.2em 0 1em 0;
    }
  }
  & > p {
    font-size: 1.1em;
    color: ${palette('greyscale', 3)};
    @media(min-width: 50em) {
      flex: 1;
    }
  }
  & > .choose {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1em;
    > * {
      margin-bottom: 1em;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @media(min-width: 50em) {
      margin-top: 0;
    }
  }
`

const DetailOptions = ({
  name,
  price,
  shortDescription,
  amount,
  options,
  onAddAmount,
  onRemoveAmount,
}) => {
  return (
    <Wrapper>
      <Heading size={1.8}>{name}</Heading>
      <Heading size={1.3} color={palette('greyscale', 1)}>￦{price}</Heading>
      <p>{shortDescription}</p>
      <div className="choose">
        <Option title="수량" amount={amount} add={onAddAmount} remove={onRemoveAmount} />
        <Option title="옵션" options={options} />
        <Button color={palette('greyscale', 3)} full>장바구니</Button>
      </div>
    </Wrapper>
  )
}

DetailOptions.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  shortDescription: PropTypes.string,
  amount: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string),
  onAddAmount: PropTypes.func,
  onRemoveAmount: PropTypes.func,
}

export default DetailOptions
