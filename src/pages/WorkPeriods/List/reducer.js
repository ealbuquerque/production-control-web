import {
  DELETE_SUCCESS,
  LIST_ERROR,
  LIST_REQUEST,
  LIST_SUCCESS,
} from './actions';

const initialState = {
  list: undefined,
};

export default (state = initialState, action) => {
  const {
    payload,
    type,
  } = action;

  switch (type) {
    case DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== payload),
      };
    
    case LIST_ERROR:
      return {
        ...state,
        error: payload,
        list: undefined,
      };

    case LIST_REQUEST:
      return {
        ...state,
        error: undefined,
        list: undefined,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        error: undefined,
      };

    default:
      return state;
  }
};
