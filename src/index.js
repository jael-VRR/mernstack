const express = require('express');
const morgan =require('morgan');
const { dirname } = require('path');
const path = require('path');
const app =express();

//Settings
app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
});
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/taskRoutes'));

//Static files
console.log(__dirname);
//app.use(express.static())
