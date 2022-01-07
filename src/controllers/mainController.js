module.exports = {
    home: (res, req) => {
        res.render('home')
    },
    register: (res, req) => {
        res.render('register')
    },
    login: (res, req) => {
        res.render('login')
    }
};