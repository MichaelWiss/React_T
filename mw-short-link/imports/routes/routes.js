import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

window.browserHistory = browserHistory;

const unathenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
	  if (Meteor.userId()) {
      browserHistory.replace('/links');
	  }
};
const onEnterPrivatePage = () => {
	if (!Meteor.userId()) {
		browserHistory.replace('/');
   }
};
const omAuthChange = (isAuthenticated) => {
   const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unathenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
const routes = (
     <Router history={browserHistory}>
       <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
       <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
       <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
       <Route path="*" component={NotFound}/>
     </Router>
);