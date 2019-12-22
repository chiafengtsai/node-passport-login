const { dbPassword } = require('./password');

module.exports = {
  MongoURI: `mongodb+srv://chia-tsai-001:${dbPassword}@cluster0-m2onl.mongodb.net/test?retryWrites=true&w=majority`
};
