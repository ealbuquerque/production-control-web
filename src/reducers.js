import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loading from './containers/Loading/reducer';
import rawMaterials from './pages/RawMaterials/List/reducer';
import workPeriods from './pages/WorkPeriods/List/reducer';

export default combineReducers({
  form: formReducer,
  loading,
  rawMaterials,
  workPeriods,
});
