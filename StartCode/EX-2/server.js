import express from 'express';
import articleRouter from './routes/articleRoute.js';
import journalistRouter from './routes/journalistRoute.js';
import categoryRouter from './routes/categoriesRoute.js';

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.use(express.json());
app.use('/articles', articleRouter);
app.use('/journalists', journalistRouter);
app.use('/categories', categoryRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});