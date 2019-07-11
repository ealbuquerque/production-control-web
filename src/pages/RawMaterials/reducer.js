import {
  DELETE_SUCCESS,
  FILTER_SUCCESS,
  LIST_ERROR,
  LIST_REQUEST,
  LIST_SUCCESS,
} from './List/actions';

import {
  ITEM_ERROR,
  ITEM_REQUEST,
  ITEM_SUCCESS,
  UPDATE_ERROR,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './Form/actions';

import operationHandler from '../../utils/operations';

const initialState = {
  error: undefined,
  list: undefined,
  item: undefined,
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
        list: state.list.filter(({
          id,
        }) => id !== payload),
      };

    case FILTER_SUCCESS:
      return {
        ...state,
        list: state.listBkp.filter(({
          quantity,
        }) => ((payload.quantity && payload.operation)
          ? operationHandler(payload.quantity.value, quantity, payload.operation.operator)
          : () => true)),
      };

    case ITEM_ERROR:
    case UPDATE_ERROR:
      return {
        ...state,
        error: payload,
        item: undefined,
      };

    case ITEM_REQUEST:
    case UPDATE_SUCCESS:
      return {
        ...state,
        error: undefined,
        item: undefined,
      };

    case ITEM_SUCCESS:
      return {
        ...state,
        item: payload,
        error: undefined,
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
        item: undefined,
        list: undefined,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        listBkp: payload,
        error: undefined,
      };

    case UPDATE_REQUEST:
      return {
        ...state,
        error: undefined,
      };

    default:
      return state;
  }
};
