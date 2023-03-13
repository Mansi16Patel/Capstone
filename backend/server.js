import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import  questionRoute from './router/que.js'
const app = express()

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


/** appliation port */
const port = process.env.PORT || 8080;
mongoose.set("strictQuery",false);


app.use('/api', router) /** apis */
app.use('/api/v1/que',questionRoute);


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})
