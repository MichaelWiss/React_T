import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

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
const routes = (
     <Router history={browserHistory}>
       <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
       <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
       <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
       <Route path="*" component={NotFound}/>
     </Router>
);