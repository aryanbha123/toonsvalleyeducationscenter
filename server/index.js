const express = require('express')
const app = express();
const port = 8000 || process.env.PORT 

app.get('/' , (req,res) => {
    res.send("Server Live ");
});

app.listen(port , () => {
    console.log("Form Connected")
});