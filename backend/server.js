import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import productRouter from "./router/productRoute.js";
import path from "path";
const app = express();
dotenv.config();
app.use(express.json()); // middleware to accept json in req.body

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use("/api", productRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
    
}

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database!!");
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, ()=>{
    console.log(`App is listening in port no:${PORT}`);
    connectDb();
})

//SIWmMrcSiTo9Xwo3