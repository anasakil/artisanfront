import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCategories,

  createNewCategory,
  updateExistingCategory,
  removeCategory,
} from "../../features/categories/categoriesSlice";


const CategoryManagement = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const handleCreateCategory = () => {
    if (newCategoryName.trim() !== '') {
      dispatch(createNewCategory({ name: newCategoryName }));
      setNewCategoryName('');
    }
  };

  const handleEditCategory = (categoryId, categoryName) => {
    setEditCategoryId(categoryId);
    setEditCategoryName(categoryName);
  };

  const handleUpdateCategory = () => {
    if (editCategoryName.trim() !== '') {
      dispatch(updateExistingCategory({ id: editCategoryId, name: editCategoryName }));
      setEditCategoryId(null);
      setEditCategoryName('');
    }
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(removeCategory(categoryId));
    }
  };

  return (
    <div>
      <h2>Category Management</h2>
      <div>
        <h3>Create New Category</h3>
        <input 
          type="text" 
          value={newCategoryName} 
          onChange={(e) => setNewCategoryName(e.target.value)} 
          placeholder="Enter category name" 
        />
        <button onClick={handleCreateCategory}>Create</button>
      </div>

      <div>
        <h3>Existing Categories</h3>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              {editCategoryId === category._id ? (
                <>
                  <input 
                    type="text" 
                    value={editCategoryName} 
                    onChange={(e) => setEditCategoryName(e.target.value)} 
                    placeholder="Enter category name" 
                  />
                  <button onClick={handleUpdateCategory}>Update</button>
                </>
              ) : (
                <>
                  {category.name}
                  <button onClick={() => handleEditCategory(category._id, category.name)}>Edit</button>
                  <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryManagement;
