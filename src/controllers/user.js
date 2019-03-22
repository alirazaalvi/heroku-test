/**
 * GET /users
 * List of hotels
 */
async function getUsers(req, res) {
  const users = [{
    email: "test@gmail.com",
    id: "1",
    name: "Test User",
  }];

  return res.send(users);
}

module.exports.getUsers = getUsers;
