import {
  SIGN_UP_STARTED,
  SIGN_UP_FINISHED
} from '../../../constants/ActionTypes';

const initialState = {
  loading: false,
  payload: null,
  error: false,
  meta: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_STARTED:
      return {
        ...state,
        loading: true
      };
    case SIGN_UP_FINISHED:
      return {
        ...state,
        loading: false,
        payload: action.payload,
        error: action.error,
        meta: action.meta || initialState.meta
      };
    default:
      return state;
  }
};
