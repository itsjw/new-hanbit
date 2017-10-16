export const initialState = {
  searching: false,
  drawer: false,
}

export const isSearching = (state = initialState) => state.searching
export const isDrawerOpened = (state = initialState) => state.drawer

