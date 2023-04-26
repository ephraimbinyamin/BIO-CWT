const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , '/dist')));

app.get('/' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'index.html'));
});

app.get('/gallery' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'gallery.html'));
});
    
app.get('/prices' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'prices.html'));
});

app.get('/about' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'about.html'));
});

app.get('/contact' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'contact.html'));
});

app.get('*' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , '404.html'));
});

app.listen(PORT);