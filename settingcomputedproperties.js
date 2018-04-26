import Ember from 'ember';

export default function() {
   var Person = Ember.Object.extend ({
      firstName: null,
      lastName: null,
      fullName: Ember.computed('firstName', 'lastName', function() {
         return this.get('firstName') + this.get('lastName');
      })
   });
   
   var nameDetails = Person.create();
   nameDetails.set('fullName', "Steve Smith");
   nameDetails.get('firstName');   // Steve
   nameDetails.get('lastName');    // Smith
   document.write("<h3>Full Name of the Person:<br><h3>" + nameDetails.get('fullName'));
}