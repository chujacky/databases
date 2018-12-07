var {User, Room, Message} = require('../db');

module.exports = {
  messages: {
    read: function (cb) {
      Message.findAll({ include: [{ model: User }, { model: Room }] })
        .then(messages => {
          cb(null, messages);
        })
        .catch(err => {
          console.log(err);
          cb(err);
        });
      // let queryString = 'SELECT messages.id,messages.content,users.username,rooms.roomname';
      // queryString += ' FROM messages,users,rooms WHERE users.id = messages.id_user AND rooms.id = messages.id_room';
      // db.query(queryString, function(error, results, fields) {
      //   if (error) {
      //     cb(error);
      //   } else {
      //     cb(null, results, fields);
      //   }
      // });
    }, // a function which produces all the messages
    create: function (body, cb) {
      var foundUser;
      User.findOne({where: {username: body.username}})
        .then((user) => {
          foundUser = user;
          return Room.findOne({where: {roomname: body.roomname}});
        })
        .then((room) => {
          return Message.create({content: body.message, UserId: foundUser.id, RoomId: room.id});
        })
        .then((message) => {
          cb(null, message);
        })
        .catch((err) => {
          cb(err);
        });
      // db.query(`SELECT id FROM users WHERE username = '${body.username}'`, (error, users, fields) => {
      //   if (error) {
      //     return cb(error);
      //   }
      //   db.query(`SELECT id FROM rooms WHERE roomname = '${body.roomname}'`, (error, rooms, fields) => {
      //     if (error) {
      //       return cb(error);
      //     }
      //     const message = {
      //       message: body.message,
      //       user: users[0].id,
      //       room: rooms[0].id
      //     };
      //     const queryString = `INSERT INTO messages (content,id_user,id_room) VALUES ("${message.message}",${message.user},${message.room})`;
      //     db.query(queryString, function(error, results, fields) {
      //       if (error) {
      //         cb(error);
      //       } else {
      //         cb(null, results, fields);
      //       }
      //     });
      //   });
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    read: function (cb) {
      User.findAll()
        .then((users) => {
          cb(null, users);
        })
        .catch((err) => {
          cb(err);
        });
    },
    create: function (body, cb) {
      User.create({
        username: body.username
      }).then((user) => {
        cb(null, user);
      }).catch((err) => cb(err));
      // const queryString = `INSERT INTO users (username) VALUES ('${body.username}')`;
      // db.query(queryString, function(error, results, fields) {
      //   if (error) {
      //     cb(error);
      //   } else {
      //     cb (null, results, fields);
      //   }
      // });
    }
  },

  rooms: {
    read: function (cb) {
      Room.findAll()
        .then((rooms) => {
          cb(null, rooms);
        })
        .catch((err) => {
          cb(err);
        });
    },
    create: function (body, cb) {
      Room.create({
        roomname: body.roomname
      }).then((room) => {
        cb(null, room);
      }).catch((err) => cb(err));
      // const queryString = `INSERT INTO rooms (roomname) VALUES ('${body.roomname}')`;
      // db.query(queryString, function(error, results, fields) {
      //   if (error) {
      //     cb(error);
      //   } else {
      //     cb (null, results, fields);
      //   }
      // });
    }

  }
};
