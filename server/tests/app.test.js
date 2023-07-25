const mongoose = require('mongoose');
const app = require('../app.js');

describe('Database connection', () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });
  it('should connect to the database successfully', async () => {
    const connection = await mongoose.connect(
      'mongodb+srv://m001-student:m001-mongodb-basics@cluster0.lvxam3o.mongodb.net',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    expect(connection).toBeDefined();
  }, 10000);
});