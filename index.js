const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,

});

const todoModel = require('./models/todoModel.js');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'

}));

app.set('view engine', '.hbs');




app.get('/', async(req, res) => {

    const todo = new todoModel ({
        Name: 'mum',
        ID: '13',
        Task: 'Make us Sunday dinner' ,
        DateCreated: Date.now()
    })

    
    await todo.save()
    
    res.render('index', {Name, ID, Task, DateCreated} );
    console.log(todo);
});




app.get('/todo', async(req, res) => {
    res.render('todo');
})






app.listen(3010, () => {
    console.log('Listening on port 3000');

})


// await todo.save().catch((error) => {
//     console.log('Housten, we have a problem!');
