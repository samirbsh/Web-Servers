const express = require('express');

const app = express();
// Routes
// blank parameter for home route
app.get('',(req,res) =>{
    res.send('Hello express!')
})

app.get('/help',(req,res) =>{
    res.send('Help Page')
})

app.get('/about',(req,res) =>{
    res.send('About')
})

app.get('/weather',(req,res) =>{
    res.send('Weather')
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000.')
})