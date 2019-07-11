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

const CONTEXT = 'EmployeeForm';

export const CREATE_ERROR = `${CONTEXT}/CREATE_ERROR`;
export const CREATE_REQUEST = `${CONTEXT}/CREATE_REQUEST`;
export const CREATE_SUCCESS = `${CONTEXT}/CREATE_SUCCESS`;
const createErrorAction = createAction(CREATE_SUCCESS);
const createRequestAction = createAction(CREATE_SUCCESS);

export const ITEM_ERROR = `${CONTEXT}/ITEM_ERROR`;
export const ITEM_REQUEST = `${CONTEXT}/ITEM_REQUEST`;
export const ITEM_SUCCESS = `${CONTEXT}/ITEM_SUCCESS`;
const itemErrorAction = createAction(ITEM_ERROR);
const itemRequestAction = createAction(ITEM_REQUEST);
const itemSuccessAction = createAction(ITEM_SUCCESS);

export const UPDATE_ERROR = `${CONTEXT}/UPDATE_ERROR`;
export const UPDATE_REQUEST = `${CONTEXT}/UPDATE_REQUEST`;
export const UPDATE_SUCCESS = `${CONTEXT}/UPDATE_SUCCESS`;
const updateErrorAction = createAction(UPDATE_ERROR);
const updateRequestAction = createAction(UPDATE_REQUEST);
const updateSuccessAction = createAction(UPDATE_SUCCESS);

export const PATH_TO_GO_BACK = '/employees';

export const createEmployee = history => data => (dispatch) => {
  const dispatcher = `${CONTEXT}.createEmployee`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(createRequestAction(dispatcher));

  Api.createEmployee(data)
    .then(() => {
      history.push(PATH_TO_GO_BACK);
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

export const getEmployee = id => (dispatch) => {
  const dispatcher = `${CONTEXT}.getEmployees`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(itemRequestAction(dispatcher));

  Api.getEmployee(id)
    .then(result => dispatch(itemSuccessAction(result)))
    .catch((error) => {
      dispatch(itemErrorAction(error));
      if (error.details) {
        toastMessage(error.details.message, TOAST_ERROR);
      }
    })
    .finally(() => dispatch(loadingHideAction(dispatcher)));
};

export const updateEmployee = (history, id) => data => (dispatch) => {
  const dispatcher = `${CONTEXT}.updateEmployee`;
  dispatch(loadingShowAction(dispatcher));
  dispatch(updateRequestAction(dispatcher));

  Api.updateEmployees(id, data)
    .then(() => {
      dispatch(updateSuccessAction());
      history.push(PATH_TO_GO_BACK);
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
