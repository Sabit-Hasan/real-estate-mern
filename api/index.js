import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect Database with mongoose
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB.");
    })
    .catch((err) => {
        console.log(err)
    });


const app = express();

// App listen
app.listen(8000, () => {
    console.log("Server listening on port 8000");
});