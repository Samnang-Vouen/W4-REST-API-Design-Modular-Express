// Logger middleware
const loger = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        const { name, email } = req.body || {};

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
    }
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

export default loger;
