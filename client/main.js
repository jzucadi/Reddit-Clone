import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.post.helpers({
  comments: function(){
    return [{
      numUpVotes: 500,
      username: "Curtis",
      commentText: "This is awesome!!"
    },
    {
      numUpVotes: 2000,
      username: "Ellie",
      commentText: "This is really awesome!!"
    }]
  }
})

Template.body.helpers({
    posts: function() {
        return [{
            numUpVotes: 1000,
            title: "Really Popular"
        }, {
            numUpVotes: 1500,
            title: "Popular"
        }]
    }
})
