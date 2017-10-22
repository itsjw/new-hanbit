import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Field } from 'redux-form'
import { required, email, length } from 'redux-form-validators'

import {
  Button,
  Heading,
  Input,
  Text,
  Nav,
} from 'components'

const Wrapper = styled.div`
  max-width: ${({ formWidth }) => formWidth}em;
  height: auto;
  margin: 0.5em auto;
  padding: 2em 2em 1.4em 2em;
  background-color: ${palette('white', 0)};
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  text-align: center;
  .form-steps {
    margin-bottom: 2em;
  }
  > form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      margin: 0.6em 0;
    }
  }
`

const BottomWrapper = styled.div`
  display: flex;
  > * {
    margin-right: 1em;
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
        placeholder="비밀번호: 8자 이상"
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
  disabled,
  formWidth,
}) => {
  return (
    <Wrapper formWidth={formWidth}>
      <Heading size={1.7}>가입</Heading>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="email"
          component={EmailField}
          validate={[required({ message: '이메일을 입력해주세요.' }), email({ message: '이메일 주소가 올바르지 않습니다.' })]}
        />
        <Field
          name="password"
          component={PasswordField}
          validate={[required({ message: '비밀번호를 입력해주세요.' }), length({ min: 8, message: '8자 이상 입력해주세요.' })]}
        />
        <Button type="submit" full disabled={disabled}>계속하기</Button>
        <BottomWrapper>
          <Text>이미 회원이신가요?</Text>
          <Nav to="/" data-hoverStyle={'transition'} data-hoverColor={palette('greyscale', 1)}>로그인 하기</Nav>
        </BottomWrapper>
      </form>
    </Wrapper>
  )
}

LocalLogin.propTypes = {
  handleSubmit: PropTypes.func,
  submit: PropTypes.func,
  disabled: PropTypes.bool,
  formWidth: PropTypes.number,
}

export default LocalLogin

