const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(
    morgan('combined', {
      stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
        flags: 'a'
      })
    })
  );
}

//Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
