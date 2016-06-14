import React from 'react';
import {Router, Route, IndexRoute, hashHistory, DefaultRoute} from 'react-router';

import MainContainer from '../containers/MainContainer';


var routes = (
  <Router history={hashHistory}>
    <Route path='(/:year/:month)' component={MainContainer} >
    </Route>
  </Router>
);

export default routes;
