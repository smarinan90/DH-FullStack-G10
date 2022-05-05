const db = require("../../database/models");

const userIsLoggedMiddleware = async (req, res, next) => {
  res.locals.islogged = false;

  let emailInCookie = req.cookies.email;
  let userFromCookie;

  if (emailInCookie) {
    userFromCookie = await db.Users.findOne({
      where: { email: emailInCookie },
    }).then((user) => {
      data = JSON.parse(JSON.stringify(user));
      return data;
    });
  }
  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};

module.exports = userIsLoggedMiddleware;
