Contests = new Mongo.Collection("contests");
 
Contests.allow({
  insert: function (userId, contest) {
    return userId && contest.owner === userId;
  },
  update: function (userId, contest, fields, modifier) {
    return userId && contest.owner === userId;
  },
  remove: function (userId, contest) {
    return userId && contest.owner === userId;
  }
});