import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import './config/db.js'
import dashboardRoute from './routes/dashboardRoute.js'



dotenv.config();


const app = express();


app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/dashboard',dashboardRoute);


const port = process.env.PORT   || 7001

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})

// http://localhost:7000/dashboard/total-population