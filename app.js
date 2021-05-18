const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const items = [];
const workItems = [];
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

// ! route : /
app.get('/',(req,res)=>{
    // res.send('Hello');
    let day = date.getDate();
    res.render('list',{ListTitle:day,newListItems:items});
});

app.post('/',(req,res)=>{

    item = req.body.newItem;
    let btn = req.body.add;
    console.log(btn);
    if(btn === "Work"){
        workItems.push(item);
        res.redirect('/work');
    }
    else{
        items.push(item);
        res.redirect('/');
    }
    
});

// ! ROUTE: /work
app.get('/work',(req,res)=>{
    res.render('list',{ListTitle:"Work",newListItems:workItems});
});
// !ROUTE : /about
app.get('/about',(req,res)=>{
    res.render('about');
});
app.listen(3000,()=>{
    console.log("Server listening at port 3000");
});