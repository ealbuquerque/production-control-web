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

const CONTEXT = 'RawMaterialsList';

export const CREATE_ERROR = `${CONTEXT}/CREATE_ERROR`;
export const CREATE_REQUEST = `${CONTEXT}/CREATE_REQUEST`;
export const CREATE_SUCCESS = `${CONTEXT}/CREATE_SUCCESS`;
const createErrorAction = createAction(CREATE_SUCCESS);
const createRequestAction = createAction(CREATE_SUCCESS);

export const UPDATE_ERROR = `${CONTEXT}/UPDATE_ERROR`;
export const UPDATE_REQUEST = `${CONTEXT}/UPDATE_REQUEST`;
export const UPDATE_SUCCESS = `${CONTEXT}/UPDATE_SUCCESS`;
const updateErrorAction = createAction(UPDATE_ERROR);
const updateRequestAction = createAction(UPDATE_REQUEST);

const RAW_MATERIALS_PATH = '/raw-materials';

export const createRawMaterial = (data, history) => (dispatch) => {
  const dispatcher = `${CONTEXT}.createRawMaterial`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(createRequestAction(dispatcher));

  Api.createRawMaterial(data)
    .then(() => {
      history.push(RAW_MATERIALS_PATH);
      toastMessage(i18n.t('general:registrySuccessfullyCreated'), TOAST_SUCCESS);
    })
    .catch((error) => {
      dispatch(createErrorAction(error));
      if (error.details) {
        toastMessage(error.details.message, TOAST_ERROR);
      }
    })
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};

export const updateRawMaterial = (data, history) => (dispatch) => {  
  const dispatcher = `${CONTEXT}.updateRawMaterial`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(updateRequestAction(dispatcher));

  Api.updateRawMaterials(data)
    .then(() => {
      history.push(RAW_MATERIALS_PATH);
      toastMessage(i18n.t('general:registrySuccessfullyUpdated'), TOAST_SUCCESS);
    })
    .catch((error) => {
      dispatch(updateErrorAction(error));
      if (error.details) {
        toastMessage(error.details.message, TOAST_ERROR);
      }
    })
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};
