const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
var path = require('path');

const app = express();
// const dbConnect = require('./database/db');
// const conn = dbConnect();

app.use(session({ secret: 'sessionsecret777' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'));

// app.use(function (request, response, next) {
//     request.db = conn;
//     next();
// });


require('./routes/web')(app);


app.listen(8080, () => {
    console.log("Server listening at port 8080");
})