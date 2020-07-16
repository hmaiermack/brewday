const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');


const app = express();
app.use(express.json());

//DB config
const db = require('./config.js').MONGO_URI;

//connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))