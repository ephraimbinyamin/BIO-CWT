const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , '/dist')));

app.get('/' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , 'index.html'));
});

app.get('/gallery' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , 'gallery.html'));
});
    
app.get('/prices' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , 'prices.html'));
});

app.get('/about' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , 'about.html'));
});

app.get('/contact' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , 'contact.html'));
});

app.get('*' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist' , '404.html'));
});

app.listen(PORT);

module.exports = app;