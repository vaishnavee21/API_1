const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  loginUser,
  getMembers
} = require('./postgresqldb');

module.exports = {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  loginUser,
  getMembers
};
