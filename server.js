const express = require('express');
const connectDB = require('./config/db')

const PORT = process.env.PORT || 3000;
const app = express();

// Connect to database
connectDB();

app.get('/', (req,res) => res.send('API running'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})