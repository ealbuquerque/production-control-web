import { createAction } from 'redux-actions';

import {
  TOAST_ERROR,
  toastMessage,
  TOAST_SUCCESS,
} from '../../../components/Toast';

import {
  loadingHideAction,
  loadingShowAction,
} from '../../../containers/Loading/actions';

import Api from './api';

const CONTEXT = 'RawMaterialsList';

export const DELETE_SUCCESS = `${CONTEXT}/DELETE_SUCCESS`;
const deleteSuccessAction = createAction(DELETE_SUCCESS);

export const LIST_ERROR = `${CONTEXT}/LIST_ERROR`;
export const LIST_REQUEST = `${CONTEXT}/LIST_REQUEST`;
export const LIST_SUCCESS = `${CONTEXT}/LIST_SUCCESS`;
const listErrorAction = createAction(LIST_ERROR);
const listRequestAction = createAction(LIST_REQUEST);
const listSuccessAction = createAction(LIST_SUCCESS);

export const deleteRawMaterial = (id) => (dispatch) => {
  const dispatcher = `${CONTEXT}.deleteRawMaterial`;
  dispatch(loadingShowAction(dispatcher));

  Api.deleteRawMaterial(id)
    .then(() => {
      dispatch(deleteSuccessAction(id));
      toastMessage('Registro removido com sucesso', TOAST_SUCCESS);
    })
    .catch(error => toastMessage(error.details.message, TOAST_ERROR))
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};

export const getRawMaterials = () => (dispatch) => {
  const dispatcher = `${CONTEXT}.getRawMaterials`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(listRequestAction(dispatcher));

  Api.getRawMaterials()
    .then(result => dispatch(listSuccessAction(result)))
    .catch((error) => {
      dispatch(listErrorAction(error));
      if (error.details) {
        toastMessage(error.details.message, TOAST_ERROR);
      }
    })
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};
