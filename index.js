require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const sensorRoutes = require('./routes/sensorRoutes');
const userRoutes = require('./routes/userRoutes');
const rpmRoutes = require('./routes/rpmRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connectDB();

app.get('/', (req, res) => {
  res.send("Api Ready");
})
app.use('/api', sensorRoutes);
app.use('/user', userRoutes);
app.use('/rpm', rpmRoutes);

const port = 5050;
const server = app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
