import React, { Component } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required, email, length } from 'redux-form-validators'

import {
  Button,
  Heading,
  Input,
  Text,
  Nav,
} from 'components'

class SignupFormContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    formWidth: PropTypes.number,
    changeView: PropTypes.func,
    endStep: PropTypes.func,
  }

  static defaultProps = {
    formWidth: 30,
  }

  submit = () => {
    this.props.endStep()
  }

  render() {
    const {
      handleSubmit,
      formWidth,
      changeView,
    } = this.props
    const {
      submit,
    } = this

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

    return (
      <Wrapper formWidth={formWidth}>
        <Heading size={1.7}>가입</Heading>
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="email"
            component={EmailField}
          />
          <Field
            name="password"
            component={PasswordField}
          />
          <Button type="submit" full>계속하기</Button>
          <BottomWrapper>
            <Text>이미 회원이신가요?</Text>
            <Nav
              to="/"
              disabled
              changeView={changeView}
              data-hoverStyle={'transition'}
              data-hoverColor={palette('greyscale', 1)}
            >로그인 하기</Nav>
          </BottomWrapper>
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const connected = connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)

const validations = {
  email: [required({ message: '이메일을 입력해주세요.' }), email({ message: '이메일 주소가 올바르지 않습니다.' })],
  password: [required({ message: '비밀번호를 입력해주세요.' }), length({ min: 8, message: '8자 이상 입력해주세요.' })],
}

const validate = (values) => {
  const errors = {}
  for (const field in validations) {
    const value = values[field]
    errors[field] = validations[field].map((validateField) => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors
}

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  validate,
})(connected)

