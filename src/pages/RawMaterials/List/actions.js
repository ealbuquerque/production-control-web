import {
  createAction,
} from 'redux-actions';
import {
  reset,
} from 'redux-form';

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

export const FORM_FILTER = `${CONTEXT}/FORM_FILTER`;

export const DELETE_SUCCESS = `${CONTEXT}/DELETE_SUCCESS`;
const deleteSuccessAction = createAction(DELETE_SUCCESS);

export const FILTER_SUCCESS = `${CONTEXT}/FILTER_SUCCESS`;
const filterAction = createAction(FILTER_SUCCESS);

export const LIST_ERROR = `${CONTEXT}/LIST_ERROR`;
export const LIST_REQUEST = `${CONTEXT}/LIST_REQUEST`;
export const LIST_SUCCESS = `${CONTEXT}/LIST_SUCCESS`;
const listErrorAction = createAction(LIST_ERROR);
const listRequestAction = createAction(LIST_REQUEST);
const listSuccessAction = createAction(LIST_SUCCESS);

export const deleteRawMaterial = id => (dispatch) => {
  const dispatcher = `${CONTEXT}.deleteRawMaterial`;
  dispatch(loadingShowAction(dispatcher));

  Api.deleteRawMaterial(id)
    .then(() => {
      dispatch(deleteSuccessAction(id));
      toastMessage(i18n.t('general:registrySuccessfullyRemoved'), TOAST_SUCCESS);
    })
    .catch(error => toastMessage(i18n.t(error.details.messageToken), TOAST_ERROR))
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

export const onClickToCleanFilter = () => (dispatch) => {
  dispatch(reset(FORM_FILTER));
};

export const onSubmitFilter = data => (dispatch) => {
  dispatch(filterAction(data));
};
