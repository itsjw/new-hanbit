import React, { Component } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { acceptance } from 'redux-form-validators'

import {
  Button,
  Heading,
  Text,
} from 'components'

class Signup2FormContainer extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    formWidth: PropTypes.number,
    endStep: PropTypes.func,
  }

  submit = () => {
    this.props.endStep()
  }
  render() {
    const Box = styled.div`
      width: 20em;
      border: 1px solid ${palette('black', 0)};
      padding: 1em;
    `

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

      width: ${({ formWidth }) => formWidth}em;
      height: auto;
      margin: 0.5em auto;
      padding: 2em 2em 1.4em 2em;
      background-color: ${palette('white', 0)};

      > ${Box} {
        margin: 0.6em 0;
      }
    `

    const CheckboxField = ({ input, meta: { touched, error }, ...rest }) => {
      const hasError = touched && error !== 'undefined'
      return (
        <div>
          <input
            type="checkbox"
            id="agree"
            {...input}
            {...rest}
            style={{ marginBottom: 5 }}
          />
          <label htmlFor="agree">위 사항을 전부 읽었으며, 이에 동의합니다.</label>
          {hasError && <Text size={0.8} color={palette('danger', 0)}>{error}</Text>}
        </div>
      )
    }

    const {
      handleSubmit,
    } = this.props
    const { submit } = this
    return (
      <Wrapper>
        <Heading size={1.7}>약관 동의</Heading>
        <Box>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime deserunt eaque id eligendi
          perspiciatis laboriosam dolorem repellendus quaerat
          recusandae corporis!
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime deserunt eaque id eligendi
          perspiciatis laboriosam dolorem repellendus quaerat
          recusandae corporis!
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime deserunt eaque id eligendi
          perspiciatis laboriosam dolorem repellendus quaerat
          recusandae corporis!
          recusandae corporis!
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime deserunt eaque id eligendi
          perspiciatis laboriosam dolorem repellendus quaerat
          recusandae corporis!
          recusandae corporis!
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime deserunt eaque id eligendi
          perspiciatis laboriosam dolorem repellendus quaerat
          recusandae corporis!
        </Box>
        <form onSubmit={handleSubmit(submit)}>
          <Field name="checkbox" component={CheckboxField} />
          <Button type="submit" full>계속하기</Button>
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const connected = connect(mapStateToProps, mapDispatchToProps)(Signup2FormContainer)

const validations = {
  checkbox: [acceptance({ message: '동의 후에 계속 진행해주세요.' })],
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
  form: 'signup2',
  destroyOnUnmount: false,
  validate,
})(connected)
