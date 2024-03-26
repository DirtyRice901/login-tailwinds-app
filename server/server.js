const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/login-tailwindsDB");

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    res.json({message: "User registered successfully!"})    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})