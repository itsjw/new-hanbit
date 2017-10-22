export const initialState = {
  signup: {
    current: 0,
    names: ['회원정보 입력', '약관 동의', '개인정보 입력'],
  },
}

export const getCurrent = (state = initialState) => state.signup.current
export const getNames = (state = initialState) => state.signup.names
