// middleware/validateProduct.js

export const validateProductData = (req, res, next) => {
    const { name, description, price, image, categoryId } = req.body;
  
    if (!name || !description || !price || !categoryId) {
      return res.status(400).json({ message: 'Name, description, price, and category are required' });
    }
  
    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }
  
    if (typeof categoryId !== 'number' || categoryId <= 0) {
      return res.status(400).json({ message: 'Category ID must be a valid positive number' });
    }
  
    next();
  };
  