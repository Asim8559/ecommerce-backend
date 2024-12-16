import express from 'express';
import db from './models/index.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // Adjust path as needed
import productRoutes from './routes/productRoutes.js'; // Adjust path as needed


dotenv.config();

const app = express();
app.use(express.json());

// Test Database Connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect:', err));

// Sync Database
db.sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error synchronizing database:', err));

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
