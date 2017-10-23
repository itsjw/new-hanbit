import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Field } from 'redux-form'

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

const EmailField = ({ input, ...rest }) => {
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
    </div>
  )
}

const PasswordField = ({ input, ...rest }) => {
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
    </div>
  )
}

const SigninForm = ({
  handleSubmit,
  submit,
  disabled,
  formWidth,
  changeView,
}) => {
  return (
    <Wrapper formWidth={formWidth}>
      <Heading size={1.7}>로그인</Heading>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="email"
          component={EmailField}
        />
        <Field
          name="password"
          component={PasswordField}
        />
        <Button type="submit" full disabled={disabled}>로그인</Button>
        <BottomWrapper>
          <Text>처음 이신가요?</Text>
          <Nav
            to="/"
            disabled
            changeView={changeView}
            data-hoverStyle={'transition'}
            data-hoverColor={palette('greyscale', 1)}
          >가입 하기</Nav>
        </BottomWrapper>
      </form>
    </Wrapper>
  )
}

SigninForm.propTypes = {
  handleSubmit: PropTypes.func,
  submit: PropTypes.func,
  disabled: PropTypes.bool,
  formWidth: PropTypes.number,
  changeView: PropTypes.func,
}

export default SigninForm
