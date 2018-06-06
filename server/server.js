const express = require('express');
const app = express();

const restRouter = require('./routes/rest');

//Make server to serve static file.
const path = require('path');

app.use('/api/v1',restRouter);
app.use(express.static(path.join(__dirname, '../public')));
//If the url does not handled by router on the server side,
//then the server send index.html from the public folder
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://talents:Talents3@ds251210.mlab.com:51210/talents-web-user-db');

//launch application,listen on port3000
app.listen(3000, () => console.log('Example app listening on port3000!'));
