import DefaultRoute from '../components/DefaultRoute';

import Home from '../pages/Home';
import RawMaterialsList from '../pages/RawMaterials/List';

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
    component: DefaultRoute,
  },
];
