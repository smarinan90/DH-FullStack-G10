const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./src/routers/mainRouter');

const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use(indexRouter);

app.listen(PORT, () => console.log("server running properly"));
