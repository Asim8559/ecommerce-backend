import express from 'express';
import db from './models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

db.sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect:', err));

db.sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error synchronizing database:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
