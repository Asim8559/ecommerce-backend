import express from 'express';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

// Route: Get all categories
router.get('/', getAllCategories);

// Route: Create a new category
router.post('/', createCategory);

// Route: Update a category
router.put('/:id', updateCategory);

// Route: Delete a category
router.delete('/:id', deleteCategory);

export default router;
