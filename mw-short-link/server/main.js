import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup


  const petSchema = new SimpleSchema({
  	name: {
  		type: String,
  		min: 1,
  		max: 200,
  		optional: true
  	},
  	age: {
  		type: Number,
  		min: 0
  	},
  	contactNumber: {
  		type: String,
  		optional: true,
  		regex: SimpleSchema.RegEx.Phone
  	}
 });

  petSchema.validate({
     age: 2,
  });
});
