const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const indexRouter = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter');
const cartRouter = require('./src/routers/cartRouter');
const adminRouter = require('./src/routers/adminRouter');


const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(publicPath));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'IVR, secret', resave: true, saveUninitialized: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/admin', adminRouter);

app.use((req, res, next) => {
    res.status(404).render('error404');
});

app.listen(PORT, () => console.log("server running properly"));
