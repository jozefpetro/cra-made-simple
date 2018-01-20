const initialState = {
  firstName: '',
  lastName: '',
  isLoading: false
}

const pageOneAuthor = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PAGE_ONE_AUTHOR_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_PAGE_ONE_AUTHOR_SUCCESS':
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
export const getAuthor = state => state.pageOneAuthor

export default pageOneAuthor
