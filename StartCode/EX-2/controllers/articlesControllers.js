import articles from "../models/articles.js";

const getAllArticles = (req, res) => {
    return res.status(200).json(articles);
};

const getArticleById = (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'User not found' });
    res.json(article);
};

const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;

    if(!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    };

    articles.push(newArticle);
    res.status(201).json(newArticle);
};

const updateArticle = (req, res) => {
    const articleId = parseInt(req.params.id);

    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });

    const { title, content, journalistId, categoryId } = req.body;

    if(!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    article.title = title;
    article.content = content;
    article.journalistId = journalistId;
    article.categoryId = categoryId;

    res.json(article);
};

const deleteArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const articleIndex = articles.findIndex(a => a.id === articleId);
    if (articleIndex === -1) return res.status(404).json({ error: 'Article not found' });

    articles.splice(articleIndex, 1);
    res.status(204).send();
};

export{ getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle };