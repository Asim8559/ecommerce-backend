import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// Route: Get all products
router.get('/', getAllProducts);

// Route: Get a product by ID
router.get('/:id', getProductById);

// Route: Create a new product
router.post('/', createProduct);

// Route: Update a product
router.put('/:id', updateProduct);

// Route: Delete a product
router.delete('/:id', deleteProduct);

export default router;
