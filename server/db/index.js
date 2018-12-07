// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// const connection = mysql.createConnection({
//   user: 'student',
//   password:'student',
//   database: 'chat'
// });

// connection.connect();

// module.exports = connection;
/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

const Sequelize = require('sequelize');
const db = new Sequelize('chat', 'student', 'student');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */

db.drop();

const User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

const Room = db.define('Room', {
  roomname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

const Message = db.define('Message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Message.belongsTo(User);
Message.belongsTo(Room);

db.sync({force: true});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });

module.exports = {
  User,
  Room,
  Message
};
