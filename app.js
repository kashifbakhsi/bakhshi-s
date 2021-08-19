const express = require("express");
var hbs = require('hbs')
const path = require("path");
const app = express();
const port = 80;

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'views') )

app.use('/static', express.static('static'))
app.use(express.urlencoded())
// app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('index', params);
})

app.listen(port,()=>{
    console.log(`the server is running on ${port}`)
})