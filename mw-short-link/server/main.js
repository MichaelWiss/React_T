import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup


  const petSchema = new SimpleSchema({
  	name: {
  		type: String,
  		min: 1,
  		max: 200
  	},
  	age: {
  		type: Number,
  		min: 0
  	}
 });

  petSchema.validate({
     name: 'Andrew'
  });
});
