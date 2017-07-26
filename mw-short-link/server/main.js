import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';


Meteor.startup(() => {
	Meteor.call('greetUser', (err, res) => {
          console.log('Greet User Arguments', err, res);
	});
});
