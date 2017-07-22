import { Meteor } from 'meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

Meteor.publish