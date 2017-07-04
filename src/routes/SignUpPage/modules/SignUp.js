import axiosInstance from '../../../helpers/AxiosInstance';

// ------------------------------------
// Constants
// ------------------------------------
/**
 * Sign up for a new account types.
 * @type {string}
 */
export const SIGN_UP_STARTED = 'SIGN_UP_STARTED';
export const SIGN_UP_FINISHED = 'SIGN_UP_FINISHED';

// ------------------------------------
// Actions
// ------------------------------------
/**
 * Do not use hasError callback if you are using
 * componentWillReceiveProps in component.
 * @param formValues
 * @param hasError
 * @return {function(*)}
 */
export const signUpAction = (formValues, hasError) => {
  return dispatch => {
    dispatch({type: SIGN_UP_STARTED});

    axiosInstance.put('/user', formValues)
      .then((response) => {
        dispatch({
          type: SIGN_UP_FINISHED,
          payload: response.data,
          error: false,
          meta: response.meta
        });
        hasError(false);
      })
      .catch((error) => {
        if (error.response) {
          dispatch({type: SIGN_UP_FINISHED,
            payload: error.response.data.errors,
            error: true
          });
        } else {
          dispatch({
            type: SIGN_UP_FINISHED, payload: ['Failed to sign up.'],
            error: true
          });
        }

        hasError(true);
      });
  };
};

// ------------------------------------
// Reducer
// ------------------------------------
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
