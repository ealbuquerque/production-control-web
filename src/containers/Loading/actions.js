import {
  createAction,
} from 'redux-actions';

export const LOADING__HIDE = 'loading/HIDE';
export const loadingHideAction = createAction(LOADING__HIDE);

export const LOADING__SHOW = 'loading/SHOW';
export const loadingShowAction = createAction(LOADING__SHOW);
