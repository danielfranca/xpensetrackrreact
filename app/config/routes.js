import React from 'react';
import {Router, Route, IndexRoute, hashHistory, DefaultRoute} from 'react-router';

import MainContainer from '../containers/MainContainer';
import Home from '../components/Home';


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer} >
        <IndexRoute component={Home} />
        <Route path=':year/:month' component={Home} />
    </Route>
  </Router>
);

export default routes;
