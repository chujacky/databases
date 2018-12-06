var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.read((err, results, fields) => {
        if (err) {
          res.status(500).json({error: err});
        } else {
          res.status(200).json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.create(req.body, (err, results, fields) => {
        if (err) {
          res.status(500).json({error:err});
        } else {
          res.status(200).json(results);
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.read((err, results, fields) => {
        if (err) {
          res.status(500).json({error:err});
        } else {
          res.status(200).json(results);
        }
      })
    },
    post: function (req, res) {
      models.users.create(req.body, (err, results, fields) => {
        if (err) {
          res.status(500).json({error: err});
        } else {
          res.status(200).json(results);
        }
      })
    }
  }, 
  rooms : {
    // Ditto as above
    get: function (req, res) {
      models.rooms.read((err, results, fields) => {
        if (err) {
          res.status(500).json({error:err});
        } else {
          res.status(200).json(results);
        }
      })
    },
    post: function (req, res) {
      models.rooms.create(req.body, (err, results, fields) => {
        if (err) {
          res.status(500).json({error: err});
        } else {
          res.status(200).json(results);
        }
      })
    }
  }
};

