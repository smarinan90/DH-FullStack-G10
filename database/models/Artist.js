module.exports = (sequelize, dataTypes) => {
    const alias = 'Artists';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        banner: {
            type: dataTypes.STRING,
            allowNull: false
        },
        artist_picture: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
        }
    };

    const config = {
        tableName: 'artists',
        timestamps: false
    };

    const Artist = sequelize.define(alias, cols, config);

    Artist.associate = models => {
        Artist.hasMany(models.Artists, {
            as: "artist",
            foreignKey: "artist_id"
        });
    };

    Artist.associate = models => {
        Artist.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        });
    };

    return Artist
}