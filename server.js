const express = require('express');
const morgan = require('morgan');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

const connectDB = require('./server/database/db');
connectDB();

const { home, addUser, updateUser } = require('./server/service/render');
const router = require('./server/route/userRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'))

app.use('/', router)

//Services
app.get('/', home);
app.get('/add-user', addUser);
app.get('/update-user', updateUser);

app.set('view engine', 'ejs')
app.use('/css', express.static(path.resolve(__dirname, 'public/css')));
app.use('/js', express.static(path.resolve(__dirname, 'public/js')));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
