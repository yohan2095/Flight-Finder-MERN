
const express = require('express');
const destinationRouter = require('./routers/destinationRouter');
const flightRouter = require('./routers/flightRouter');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();


app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./configs/database');


app.use('/api/destinations', destinationRouter);
app.use('/api/flights', flightRouter);

app.listen(8000);