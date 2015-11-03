

    Template.listetudiants.helpers({
        newstudents: function(){
          return NewStudent.find({});
        }
    });

      //Pour ajouter une donnée
      Template.listetudiants.events({
        'submit .new-student': function(event){
          var nameVar = event.target.Name.value;

            NewStudent.insert({
            Name: nameVar,
            createdAt: new Date()
            });

            event.target.Name.value = "";
            return false;
          }
      });

      //Pour supprimer une saisie
      Template.saisie.events({
          'click .toggle-checked': function(){
            NewStudent.update(this._id, {$set: {checked: !this.checked}});
          },

          'click .delete': function(){
            NewStudent.remove(this._id);
          }
      });

      Template.listetudiants.events({
    'click .logout': function(event) {
      event.preventDefault();
      Meteor.logout();
    }
  });
