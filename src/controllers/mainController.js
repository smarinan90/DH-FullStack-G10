module.exports = {
    home: (req, res) => {
        res.render('home');
    },
    register: (req, res) => {
        res.render('client/register');
    },
    login: (req, res) => {
        res.render('client/login');
    }
};