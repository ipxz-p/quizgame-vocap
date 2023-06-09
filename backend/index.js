import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'
import wordSetRoutes from './routes/wordSetRoutes.js';
import wordRoutes from './routes/wordRoutes.js';
import playHistory from './routes/playHistoryRoutes.js'
import wishlistHistory from './routes/wishlistRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'localhost:3000', 'localhost:8080'],
    credentials: true
}))

// routes
app.use('/auth', authRoutes)
app.use('/wordSet', wordSetRoutes)
app.use('/word', wordRoutes)
app.use('/playHistory', playHistory)
app.use('/wishlist', wishlistHistory)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})