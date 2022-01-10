module.exports = {
    home: (req, res) => {
        res.render('home')
    },
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login')
    }
};