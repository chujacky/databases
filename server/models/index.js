var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      const queryString = 'SELECT * FROM messages';
      db.query(queryString, function(error, results, fields) {
        if (error) {
          cb(error);
        } else {
          cb(null, results, fields);
        }
      });
    }, // a function which produces all the messages
    post: function (message, cb) {
      // find userid from message.username
      // find roomid from message.roomname
      // THEN
      // create message
      const queryString = `INSERT INTO messages VALUES (${message.message})`;
      db.query();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
