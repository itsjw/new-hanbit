export const initialState = {
  // 디테일 페이지의 탭 이름
  detail: ['제품 상세', '리뷰'],
  'detail-default': ['제품 상세'],
}

export const getActiveTabName = (state = initialState, productId) => (
  (state[`detail-${productId}`] || state['detail-default'])[0]
)
export const getDetailTabName = (state = initialState) => state.detail

