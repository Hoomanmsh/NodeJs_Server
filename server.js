const express = require('express')
const hbs = require('hbs');



let app = express();
//آدرس دهی فایل های statics
app.use(express.static('E:/Web/Tamrin/Bootstrap-projects/Project-2'))
app.use(express.static(__dirname+'/static'))
//تنظیمات استفاده از hbs
app.set('view engine','hbs');
//آدرس دهی فایل های partials
hbs.registerPartials(__dirname+'/views/partials')
//middelware
app.use((req,res,next)=>{
    console.log(req.url);
    next();
})

app.get('/',(req,res)=>{
    res.send("Serve is Working!")
})

//about page
app.get('/about',(req,res)=>{
    res.render('about',{
        message:"This is Message from hbs"
    })
})

//contact page
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(3000);