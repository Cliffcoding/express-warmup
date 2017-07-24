const bcrypt = require('bcrypt')
module.exports = [
  {
    email: 'test@test.com',
    password: bcrypt.hashSync('password', 8)
  },
  {
    email: 'test1@test.com',
    password: bcrypt.hashSync('password1', 8)
  }
]
