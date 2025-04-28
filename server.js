const express = require('express');
const sequelize = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/todos', todoRoutes);

sequelize.sync()
  .then(() => console.log('📦 Database connected and models synced'))
  .catch(err => console.error('Error connecting to DB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
