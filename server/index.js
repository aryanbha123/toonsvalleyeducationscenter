const express = require('express')
const app = express();
const port = 8000 || process.env.PORT
const Uri =  "mongodb+srv://aryanbhandari4077:<password>@cluster0.wqexvgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || process.env.URI 
const mongoose = require('mongoose')
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin:"*",
    allowedHeaders:true
}));


app.get('/' , (req,res) => {
    res.send("Server Live ");
});

app.listen(port , () => {
    console.log("Form Connected")
});

mongoose.connect(URI , (req,res) =>  {

})