import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';


Meteor.startup(() => {
    //creating and registering new middleware function
    WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);

    const link = Links.findOne({ _id });

    if (link) {
       res.statusCode = 302;
       res.setHeader('Location', link.url);
       res.end();
    } else {
    	next()
     }
    });
    // //set http status code to 302
    // res.statusCode = 302;
    // //set location header to 'http://www.google.com'
    // res.setHeader('Location', 'http://www.google.com')

    // res.write('<h1>This is my middleware</h1>');
    // //end the request
    // res.end();

	WebApp.connectHandlers.use((req, res, next) => {
      console.log('This is my custom middleware');
      console.log(req.url, req.method, req.headers, req.query);
 //      //set HTTP status code
 //      res.statusCode = 404;
 //      //set HTTP headers
 //      res.setHeader('my-custom-success-header', 'Michael was here')
 //      //set HTTP body
 //      // res.write('<h1>This is my middleware</h1>');
 //      //end HTTP request
 //      res.end();

      next();
	});
});
