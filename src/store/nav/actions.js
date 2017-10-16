export const EXPAND_NAV = 'EXPAND_NAV'
export const COLLAPSE_NAV = 'COLLAPSE_NAV'

export const expandNav = name => ({
  type: EXPAND_NAV,
  payload: {
    name,
  },
})

export const collapseNav = name => ({
  type: COLLAPSE_NAV,
  payload: {
    name,
  },
})

