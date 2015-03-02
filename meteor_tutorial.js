if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });
 
  Template.reset.events({
    'click button': function() {
	return Session.set("counter",0);
		}
	});
  

  Template.hello.events({
    'click button': function () {
	var clicker = Math.floor((Math.random() * 100) + 1);
      Session.set("counter", Session.get("counter") + clicker);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
