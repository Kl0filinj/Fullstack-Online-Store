const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/auth');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

async function connection() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
  });
}

connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Server error, ${err}`);
    process.exit(1);
  });
