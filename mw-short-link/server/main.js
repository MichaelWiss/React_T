import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';


Meteor.startup(() => {
	WebApp.connectHandlers.use((req, res, next) => {
      console.log('This is my custom middleware');
      console.log(req.url, req.method, req.headers, req.query);
      //set HTTP status code
      //set HTTP headers
      //set HTTP body
      //end HTTP request
      next();
	});
});
