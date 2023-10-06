import { SUMBIT_QUERY } from 'constants/actionTypes';
import { createStore } from 'redux';
const initialState = Object.freeze({
  queryInput: '',
  page: 1,
  items: [],
  error: null,
  loading: false,
  loadMore: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUMBIT_QUERY:
      return { ...state, queryInput: action.payload };
    default:
      break;
  }
};

export const store = createStore(reducer);
