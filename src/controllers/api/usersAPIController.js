const db = require("../../../database/models");

const usersAPIController = {
  list: (req, res) => {
    db.Users.findAll().then((users) => {
      try {
        let respuesta = {
          meta: {
            status: 200,
            total: users.length,
            url: "api/products/users",
          },
          data: users
        };
        res.json(respuesta);
      } catch (error) {
        throw error
      }
    });
  }
};

module.exports = usersAPIController;
