var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results, fields) => {
        console.log('err', err);
        console.log('results', results);
        console.log('fields', fields);
        if (err) {
          res.status(500).json({error: err});
        } else {
          res.status(200).json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // create message
      // once created
      // send response
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

