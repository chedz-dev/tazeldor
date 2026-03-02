const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 3001;

// Routers
const homeRouter = require('./routes/Home');
app.use('/home', homeRouter);

app.listen(HTTP_PORT, () => {
    console.log('Server is listening on port ', HTTP_PORT);
});

// GET Index
app.get('/', (request,response) => {
    response.send('Hello World!\nWelcome to Tazeldor.com :)');
});
