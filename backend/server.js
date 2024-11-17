const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./db/connection');

app.use(morgan('dev'));
 app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Route Imports
const freelancerRoutes = require('./routes/freelancerRoutes');
const clientsRoutes = require('./routes/userModelRoutes')
const userRoute = require('./routes/uesrRoutes');
const authRoutes=require('./routes/authRoutes')
const clientAcount=require('./model/clientAcount')

// Route Setup
app.use('/app', freelancerRoutes);

app.use('/users',clientsRoutes)
app.use('/auth',authRoutes)
app.use('/acount',clientAcount)

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
