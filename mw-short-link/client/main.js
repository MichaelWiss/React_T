import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
	Meteor.call('addNumbers', 17, 3, (err, res) => {
          console.log('Greet User Arguments', err, res);
	});
	ReactDOM.render(routes, document.getElementById('app'));
})