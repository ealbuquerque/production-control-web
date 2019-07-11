import React, {
  Suspense,
} from 'react';
import {
  Provider,
} from 'react-redux';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import LoadingComponent from './components/Loading';
import ToastContainer from './components/Toast';

import Navbar from './containers/Navbar';
import Loading from './containers/Loading';

import routesConfig from './config/routes';
import store from './store';

import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './assets/styles/main.scss';

import './i18n';

const getRoute = (route, index) => (
  <Route
    key={index}
    {...route}
  />
);

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<LoadingComponent showLoading />}>
        <ToastContainer />
        <Loading />
        <Navbar />
        <section className="section">
          <div className="container">
            <Switch>
              {routesConfig.map(getRoute)}
            </Switch>
          </div>
        </section>
      </Suspense>
    </HashRouter>
  </Provider>
);
