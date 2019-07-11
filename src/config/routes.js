import DefaultRoute from '../components/DefaultRoute';

import Home from '../pages/Home';
import EmployeesList from '../pages/Employees/List';
import EmployeesForm from '../pages/Employees/Form';
import ProductsList from '../pages/Products/List';
import ProdutcsForm from '../pages/Products/Form';
import RawMaterialsForm from '../pages/RawMaterials/Form';
import RawMaterialsList from '../pages/RawMaterials/List';
import WorkPeriodsList from '../pages/WorkPeriods/List';
import WorkPeriodsForm from '../pages/WorkPeriods/Form';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/employees',
    exact: true,
    component: EmployeesList,
  },
  {
    path: '/employees/new',
    exact: true,
    component: EmployeesForm,
  },
  {
    path: '/employees/:id',
    component: EmployeesForm,
  },
  {
    path: '/products',
    exact: true,
    component: ProductsList,
  },
  {
    path: '/products/new',
    exact: true,
    component: ProdutcsForm,
  },
  {
    path: '/products/:id',
    component: ProdutcsForm,
  },
  {
    path: '/raw-materials',
    exact: true,
    component: RawMaterialsList,
  },
  {
    path: '/raw-materials/new',
    exact: true,
    component: RawMaterialsForm,
  },
  {
    path: '/raw-materials/:id',
    component: RawMaterialsForm,
  },
  {
    path: '/work-periods',
    exact: true,
    component: WorkPeriodsList,
  },
  {
    path: '/work-periods/new',
    exact: true,
    component: WorkPeriodsForm,
  },
  {
    path: '/work-periods/:id',
    component: WorkPeriodsForm,
  },
  {
    component: DefaultRoute,
  },
];
