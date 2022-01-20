const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter');
const cartRouter = require('./src/routers/cartRouter');

const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.listen(PORT, () => console.log("server running properly"));
