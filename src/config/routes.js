import DefaultRoute from '../components/DefaultRoute';

import Home from '../pages/Home';
import RawMaterialsList from '../pages/RawMaterials/List';
import WorkPeriodsList from '../pages/WorkPeriods/List';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/raw-materials',
    exact: true,
    component: RawMaterialsList,
  },
  {
    path: '/work-periods',
    exact: true,
    component: WorkPeriodsList,
  },
  {
    component: DefaultRoute,
  },
];
