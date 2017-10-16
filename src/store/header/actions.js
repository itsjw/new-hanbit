export const START_SEARCH = 'START_SEARCH'
export const CANCEL_SEARCH = 'CANCEL_SEARCH'

export const startSearch = () => ({
  type: START_SEARCH,
})

export const cancelSearch = () => ({
  type: CANCEL_SEARCH,
})

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

export const openDrawer = () => ({
  type: OPEN_DRAWER,
})

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
})
