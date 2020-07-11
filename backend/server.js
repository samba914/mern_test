const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://samba914:samba914@cluster0.euoie.gcp.mongodb.net/samba914?retryWrites=true&w=majority";
mongoose.connect(uri,  { useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});