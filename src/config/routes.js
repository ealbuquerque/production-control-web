import DefaultRoute from '../components/DefaultRoute';

import Home from '../pages/Home';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: DefaultRoute,
  },
];
