// Actions
const COMPLETE_LOADING = 'COMPLETE_LOADING';

// Reducer
const initialState = {
  isLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;

// Action Creators
export const completeLoading = () => {
  return {
    type: COMPLETE_LOADING
  };
};
