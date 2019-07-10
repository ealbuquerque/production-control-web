import {
  combineReducers,
} from 'redux';
import {
  reducer as formReducer,
} from 'redux-form';

import loading from './containers/Loading/reducer';

import employees from './pages/Employees/List/reducer';
import products from './pages/Products/List/reducer';
import rawMaterials from './pages/RawMaterials/List/reducer';
import workPeriods from './pages/WorkPeriods/List/reducer';

export default combineReducers({
  employees,
  form: formReducer,
  loading,
  products,
  rawMaterials,
  workPeriods,
});
