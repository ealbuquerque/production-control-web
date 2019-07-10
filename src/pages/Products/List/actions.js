import {
  createAction,
} from 'redux-actions';

import {
  TOAST_ERROR,
  toastMessage,
  TOAST_SUCCESS,
} from '../../../components/Toast';

import {
  loadingHideAction,
  loadingShowAction,
} from '../../../containers/Loading/actions';

import i18n from '../../../i18n';

import Api from './api';

const CONTEXT = 'ProductsList';

export const DELETE_SUCCESS = `${CONTEXT}/DELETE_SUCCESS`;
const deleteSuccessAction = createAction(DELETE_SUCCESS);

export const LIST_ERROR = `${CONTEXT}/LIST_ERROR`;
export const LIST_REQUEST = `${CONTEXT}/LIST_REQUEST`;
export const LIST_SUCCESS = `${CONTEXT}/LIST_SUCCESS`;
const listErrorAction = createAction(LIST_ERROR);
const listRequestAction = createAction(LIST_REQUEST);
const listSuccessAction = createAction(LIST_SUCCESS);

export const deleteProduct = id => (dispatch) => {
  const dispatcher = `${CONTEXT}.deleteProduct`;
  dispatch(loadingShowAction(dispatcher));

  Api.deleteProduct(id)
    .then(() => {
      dispatch(deleteSuccessAction(id));
      toastMessage(i18n.t('general:registrySuccessfullyRemoved'), TOAST_SUCCESS);
    })
    .catch(error => toastMessage(error.details.message, TOAST_ERROR))
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};

export const getProducts = () => (dispatch) => {
  const dispatcher = `${CONTEXT}.getProducts`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(listRequestAction(dispatcher));

  Api.getProducts()
    .then(result => dispatch(listSuccessAction(result)))
    .catch((error) => {
      dispatch(listErrorAction(error));
      if (error.details) {
        toastMessage(error.details.message, TOAST_ERROR);
      }
    })
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};
