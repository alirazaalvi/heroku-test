/**
 * GET /users
 * List of hotels
 */
async function getUsers(req, res) {
  const users = [{
    id: 1,
    name: 'Test User',
    email: 'test@gmail.com',
  }];

  return res.send(users);
}

module.exports.getUsers = getUsers;
