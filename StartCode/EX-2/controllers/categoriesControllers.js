import categories from "../models/categories.js";
import articles from "../models/articles.js";

const getAllCategories = (req, res) => {
    return res.status(200).json(categories);
}

const getCategoryById = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

const createCategory = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newCategory = {
        id: categories.length + 1,
        name
    };

    categories.push(newCategory);
    res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);

    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    category.name = name;

    res.json(category);
};

const deleteCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === categoryId);
    if (categoryIndex === -1) return res.status(404).json({ error: 'Category not found' });

    categories.splice(categoryIndex, 1);
    res.status(204).send();
};

const getArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const articlesByCategory = articles.filter(article => article.categoryId === categoryId);
    if (articlesByCategory.length === 0) {
        return res.status(404).json({ error: 'No articles found for this category' });
    }
    res.json(articlesByCategory);
};

export {
    getAllCategories,
    getCategoryById,
    createCategory, 
    updateCategory,
    deleteCategory,
    getArticlesByCategory
}