// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Extract token

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token

      req.user = await User.findByPk(decoded.id); // Get user details from the database

      if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
      }

      next(); // If everything is fine, proceed to next middleware
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed or expired' });
    }
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

// Admin Check Middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed to next middleware
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};
