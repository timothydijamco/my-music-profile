const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/api');
const dbUri = require('./hidden/dbUri');

const app = express();
const port = 4000;


// == Database == //

mongoose.connect(dbUri, { useNewUrlParser: true })
   .then(() => console.log("Database connected"))
   .catch(err => console.log(err));

// Replace mongoose promise with node promise
mongoose.Promise = global.Promise;


// == Middleware == //

app.use('/', express.static('./client-web/build'));

// Allow cross-origin requests
app.use('/api', (req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Parse incoming data
app.use('/api', bodyParser.json());

// Route API
app.use('/api', routes);

// Print errors
app.use('/api', (err, req, res, next) => {
   console.log(err);
   next();
});


// == Start server == //

app.listen(port, () => {
   console.log("Server listening on port " + port);
});
