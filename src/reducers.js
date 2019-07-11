import {
  combineReducers,
} from 'redux';
import {
  reducer as formReducer,
} from 'redux-form';

import loading from './containers/Loading/reducer';

import employees from './pages/Employees/reducer';
import products from './pages/Products/reducer';
import rawMaterials from './pages/RawMaterials/reducer';
import workPeriods from './pages/WorkPeriods/reducer';

export default combineReducers({
  employees,
  form: formReducer,
  loading,
  products,
  rawMaterials,
  workPeriods,
});
