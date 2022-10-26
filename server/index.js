const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

var bodyParser = require('body-parser');
const port= process.env.PORT || 5000
const app = express();
app.use(cors());

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// app.use(bodyParser.json());

// app.use('/orders',require('./routes/orderRoutes'));
app.use('/',require('./routes/orderRoutes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
