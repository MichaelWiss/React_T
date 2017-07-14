import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
 


  Accounts.validateNewUser((user) => {
  	 const email = user.emails[o].address;
      
     new SimpleSchema({
     	email: {
           type: String,
           regEx: SimpleSchema.RegEx.Email
     	}
  	}).validate({ email })

     return true;
  });


  // const petSchema = new SimpleSchema({
  // 	name: {
  // 		type: String,
  // 		min: 1,
  // 		max: 200,
  // 		optional: true
  // 	},
  // 	age: {
  // 		type: Number,
  // 		min: 0
  // 	},
  // 	contactNumber: {
  // 		type: String,
  // 		optional: true,
  // 		regex: SimpleSchema.RegEx.Phone
  // 	}
  const employeeSchema = new SimpleSchema({
       name : {
       	  type: String,
       	  min: 1,
       	  max: 201,  
       },
       hourlyWage: {
       	  type: Number,
       	  min: 0
       },
       email: {
       	type: String,
       	regEx: SimpleSchema.RegEx.Email
       }
 });

  employeeSchema.validate({
       name: 'Mike',
       hourlyWage: 45,
       email: 'mike@email.com'
  });

  // petSchema.validate({
  //    age: 2,
  //    contactNumber: '1234'

});
