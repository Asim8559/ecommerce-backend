import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { validateProductData } from '../middleware/validateProduct.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route: Get all products
router.get('/', getAllProducts);

// Route: Get a product by ID
router.get('/:id', getProductById);

// // Route: Create a new product
// router.post('/', createProduct);

// // Route: Update a product
// router.put('/:id', updateProduct);

// // Route: Delete a product
// router.delete('/:id', deleteProduct);

// Protect product creation and deletion routes
router.post('/', protect, admin, validateProductData, createProduct);
router.put('/:id', protect, admin, validateProductData, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
