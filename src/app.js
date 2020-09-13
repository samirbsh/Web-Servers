const path = require('path');
const express = require('express');
const app = express();
// redirection to public folders
const publicDirectoryPath = path.join(__dirname, '../public')
// Serving(customizing) up the server
app.use(express.static(publicDirectoryPath))
// Routes

app.get('/weather',(req,res) =>{
    res.send('Weather')
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000.')
})