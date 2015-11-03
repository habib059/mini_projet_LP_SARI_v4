var greet = function(name){
  console.log('I\'m the '+name);
}

if (Meteor.isClient) {
  greet('Client.');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  greet("Server.");
}
