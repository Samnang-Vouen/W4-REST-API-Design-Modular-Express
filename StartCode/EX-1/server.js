import express from 'express';
import logger from './middleware/logger.js';
import userRouter from './routes/userRoute.js';

const app = express();
app.use(express.json());
app.use(logger);
app.use('/users', userRouter); //base URL

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
