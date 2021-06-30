import express from  'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import morgan from 'morgan'
import Errors from './middlewares/errorMiddlewares.js'
// import cors from 'cors'
//Initalize App
const app = express();

//Load Environment Variables
dotenv.config()

//Run Database
connectDB();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
//Middlewares
app.use(express.json());
// app.use(cors())



//Load Routes
import userRoute from './routes/userRoute.js'
import parcelRoute from './routes/parcelRoute.js'



//Use Routes
app.use('/api/users', userRoute)
app.use('/api/parcels', parcelRoute)


app.get("/", (req, res)=>{
    res.send("we are connected")
})
//Error Handling
app.use(Errors.notFound)
app.use(Errors.errorHandler)



const PORT = 100;
app.listen(PORT, ()=>{
    console.log(`App is Listening on Port ${PORT}`);
})