import express, { json } from 'express'
import dotenv  from 'dotenv'
import connectDB from './db/db.js'
import userRoutes from './routes/user.route.js'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

dotenv.config();
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(morgan('combined'));

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);

app.use('/api/users', userRoutes)

app.listen(8000, ()=>{
    connectDB().then(() => {
        console.log("Server is listning on 127.0.0.1/8000 , connected to DB")
    })
})