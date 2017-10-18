import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Loading = ({
  props,
}) => {
  return (
    <Wrapper>
      <Spinner
        size={50}
        text={'페이지를 가져오는 중 ..'}
      />
    </Wrapper>
  )
}

export default Loading
