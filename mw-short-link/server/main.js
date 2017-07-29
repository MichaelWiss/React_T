import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';


Meteor.startup(() => {
	WebApp.connectHandlers.use(() => {
      console.log('This is my custom middleware')
	});
});
