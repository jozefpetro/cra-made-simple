const initialState = {
  firstName: '',
  lastName: '',
  isLoading: false
}

const author = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTHOR_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_AUTHOR_SUCCESS':
      return {
        ...state,
        ...action.payload.author,
        isLoading: false
      }
    default:
      return state
  }
}

// selectors
export const getAuthor = state => state.author

export default author
