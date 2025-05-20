import journalists from "../models/journalists.js";
import articles from "../models/articles.js";

const getAllJournalists = (req, res) => {
    res.status(200).json(journalists);
};

const getJournalistById = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

const createJournalist = (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

const updateJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    const { name, email } = req.body;
    if(!name || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    journalist.name = name;
    journalist.email = email;

    res.json(journalist);
};

const deleteJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalistIndex = journalists.findIndex(j => j.id === journalistId);
    if (journalistIndex === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(journalistIndex, 1);
    res.status(204).send();
};

const getArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const articlesByJournalist = articles.filter(article => article.journalistId === journalistId);
    if (articlesByJournalist.length === 0) {
        return res.status(404).json({ error: 'No articles found for this journalist' });
    }
    res.json(articlesByJournalist);
}

export {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getArticlesByJournalist
};