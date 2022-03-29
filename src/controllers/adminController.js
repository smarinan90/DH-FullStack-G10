const db = require("../../database/models");

module.exports = {

    products_list: async (req, res) => {
        const artists = db.Artists.findAll();

        res.render('admin/products_list', {
            artists
        });
    },

    // Artists CRUD

    artist_creation_page: (req, res) => {
        res.render('admin/artist_create');
    },

    create_artist: async (req, res) => {
        try {
            const valResult = validationResult(req);
            if (!valResult.errors) {
                return res.render("admin/artist_create", {
                    errors: valResult.mapped(),
                    oldData: req.body,
                });
            } else {

                const { name, banner, artist_picture, description } = req.body;

                let nameVerification = await db.Artists.findOne({
                    where: { name: name }
                });

                nameVerification ? res.render("admin/artist_create", {
                    errors: {
                        email: {
                            msg: 'El artista ya existe'
                        }
                    },
                    oldData: req.body,
                }) : null;

                const newArtist = {
                    name,
                    banner,
                    artist_picture,
                    description
                }

                await db.Artists.create(newArtist);
            }

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    },

    artist_edit_page: async (req, res) => {

        try {
            const id = req.params.id;
            const artistInfo = await db.Artists.findByPk(id);

            res.render('admin/artist_create', {
                oldData: artistInfo
            });

        } catch (error) {
            res.send(error)
        }
    },

    update_artist: async (req, res) => {

        try {
            const valResult = validationResult(req);
            if (!valResult.errors) {
                return res.render("admin/artist_create", {
                    errors: valResult.mapped(),
                    oldData: req.body,
                });
            } else {

                const { name, banner, artist_picture, description } = req.body;

                let nameVerification = await db.Artists.findOne({
                    where: { name: name }
                });

                nameVerification ? res.render("admin/artist_create", {
                    errors: {
                        email: {
                            msg: 'El artista ya existe'
                        }
                    },
                    oldData: req.body,
                }) : null;

                const newArtist = {
                    name,
                    banner,
                    artist_picture,
                    description
                }

                await db.Artists.update(newArtist, { where: { id: req.params.id } });
            }

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    },

    delete_artist: async (req, res) => {

        try {
            await db.Artists.destroy({ where: { id: req.param.id } });

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    },

    // Album CRUD

    album_creation_page: (req, res) => {
        res.render('admin/album_create');
    },

    create_album: async (req, res) => {
        try {
            const valResult = validationResult(req);
            if (!valResult.errors) {
                return res.render("admin/album_create", {
                    errors: valResult.mapped(),
                    oldData: req.body,
                });
            } else {

                const { name, release_date, price, stock, discount, cover_image } = req.body;

                let nameVerification = await db.Albums.findOne({
                    where: { name: name }
                });

                nameVerification ? res.render("admin/album_create", {
                    errors: {
                        email: {
                            msg: 'El album ya existe'
                        }
                    },
                    oldData: req.body,
                }) : null;

                const newAlbum = {
                    name,
                    release_date,
                    price,
                    stock,
                    discount,
                    cover_image
                }

                await db.Albums.create(newAlbum);
            }

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    },

    album_edit_page: async (req, res) => {

        try {
            const id = req.params.id;
            const artistInfo = await db.Albums.findByPk(id);

            res.render('admin/album_create', {
                oldData: artistInfo
            });

        } catch (error) {
            res.send(error)
        }
    },

    update_album: async (req, res) => {

        try {
            const valResult = validationResult(req);
            if (!valResult.errors) {
                return res.render("admin/album_create", {
                    errors: valResult.mapped(),
                    oldData: req.body,
                });
            } else {

                const { name, release_date, price, stock, discount, cover_image } = req.body;

                let nameVerification = await db.Albums.findOne({
                    where: { name: name }
                });

                nameVerification ? res.render("admin/album_create", {
                    errors: {
                        email: {
                            msg: 'El artista ya existe'
                        }
                    },
                    oldData: req.body,
                }) : null;

                const newAlbum = {
                    name,
                    release_date,
                    price,
                    stock,
                    discount,
                    cover_image
                }

                await db.Albums.update(newAlbum, { where: { id: req.params.id } });
            }

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    },

    delete_artist: async (req, res) => {

        try {
            db.Albums.destroy({ where: { id: req.param.id } });

            res.redirect("/admin/products_list");

        } catch (error) {
            res.send(error)
        }
    }
};