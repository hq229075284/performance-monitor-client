/** @format */

// import React, {useEffect, useState} from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import Config from 'src/config';
import history from './history';
import Login from 'src/views/Login';
import Console from 'src/views/Console';
// import type {RouteItem} from './routeItem';
import routeItem from './routeItem';
// import {isEmpty} from 'src/utils';
import {hasToken} from 'src/utils/auth';
import {getFirstRoute} from 'src/utils';
import Layout from 'src/Layout';
const Routes = () => {
  const homePath =  getFirstRoute(routeItem);
  const exactPath = hasToken() ? homePath?.path : Config.LOGIN_PATH; 
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" to={{pathname: exactPath}} exact />
        <Route path={Config.LOGIN_PATH} component={Login} exact />
        <Route path='/' component={Layout}>
          <Route path='/console' component={Console} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
