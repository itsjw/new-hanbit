import React, { Component } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required, email, length } from 'redux-form-validators'
import { isPending } from 'redux-saga-thunk'
import { withRouter } from 'react-router-dom'
import { signUpRequest } from 'store/actions'

import {
  Button,
  Heading,
  Input,
  Text,
  Nav,
} from 'components'

class SignupForm3Container extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    onSignUpRequest: PropTypes.func,
    history: PropTypes.object,
    pending: PropTypes.bool,
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
      pending,
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
  
    const NameField = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <Input
            type="text"
            placeholder="이름"
            font={1}
            {...input}
            {...rest}
            style={{ marginBottom: 5 }}
          />
          {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
        </div>
      )
    }

    const PhoneField = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <Input
            type="number"
            placeholder="전화번호"
            font={1}
            {...input}
            {...rest}
            style={{ marginBottom: 5 }}
          />
          {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
        </div>
      )
    }

    const ZipcodeField = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <Input
            type="number"
            placeholder="우편번호"
            font={1}
            {...input}
            {...rest}
            style={{ marginBottom: 5 }}
          />
          {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
        </div>
      )
    }

    const AddressField = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <Input
            type="text"
            placeholder="주소"
            font={1}
            {...input}
            {...rest}
            style={{ marginBottom: 5 }}
          />
          {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
        </div>
      )
    }

    const Address2Field = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <Input
            type="text"
            placeholder="상세 주소"
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
        <Heading size={1.7}>개인정보 입력</Heading>
        <Heading size={1.2}>* 아래 정보는 택배 배송 등의 과정에 이용됩니다.</Heading>
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="name"
            component={NameField}
          />
          <Field
            name="phone"
            component={PhoneField}
          />
          <Field
            name="zipcode"
            component={ZipcodeField}
          />
          <Field
            name="address"
            component={AddressField}
          />
          <Field
            name="address2"
            component={Address2Field}
          />
          <Button type="submit" full disabled={pending}>계속하기</Button>
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  pending: isPending(state, 'signup'),
})

const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (email, password) => dispatch(signUpRequest(email, password)),
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SignupForm3Container)

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

export default withRouter(reduxForm({
  form: 'signup3',
  validate,
})(connected))
