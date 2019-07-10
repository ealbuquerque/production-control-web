import {
  LOADING__HIDE,
  LOADING__SHOW,
} from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {
    payload: context,
    type,
  } = action;

  switch (type) {
    case LOADING__HIDE:
      return {
        ...state,
        [context]: undefined,
      };

    case LOADING__SHOW:
      return {
        ...state,
        [context]: true,
      };

    default:
      return state;
  }
};
