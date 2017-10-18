import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Field } from 'redux-form'
import { required, email, length } from 'redux-form-validators'

import { Button, Heading, Input, Text } from 'components'

const Wrapper = styled.div`
  width: 50%;
  height: 40vh;
  margin: 10em auto;
  padding-top: 5em;
  background-color: ${palette('white', 0)};
  display: flex;
  flex-direction: column;
  align-items: center;

  > form {
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > div {
      width: 100%;
    }
  }
`

const EmailField = ({ input, meta: { touched, error }, ...rest }) => {
  const hasError = touched && error !== 'undefined'
  return (
    <div>
      <Input
        type="text"
        placeholder="이메일"
        font={1}
        {...input}
        {...rest}
        style={{ marginBottom: 5 }}
      />
      {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
    </div>
  )
}

const PasswordField = ({ input, meta: { touched, error }, ...rest }) => {
  const hasError = touched && error !== 'undefined'
  return (
    <div>
      <Input
        type="password"
        placeholder="비밀번호"
        font={1}
        {...input}
        {...rest}
        style={{ marginBottom: 5 }}
      />
      {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
    </div>
  )
}

const LocalLogin = ({
  handleSubmit,
  submit,
}) => {
  return (
    <Wrapper>
      <Heading size={1.7}>로그인</Heading>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="email"
          component={EmailField}
          validate={[required({ message: '이메일을 입력해주세요.' }), email({ message: '이메일 주소가 올바르지 않습니다.' })]}
        />
        <Field
          name="password"
          component={PasswordField}
          validate={[required({ message: '이메일을 입력해주세요.' }), length({ min: 4, message: '4자 이상 입력해주세요.' })]}
        />
        <Button type="submit" full>계속하기</Button>
      </form>
    </Wrapper>
  )
}

LocalLogin.propTypes = {
  handleSubmit: PropTypes.func,
  submit: PropTypes.func,
}

export default LocalLogin

