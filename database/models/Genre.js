module.exports = (sequelize, dataTypes) => {
    const alias = 'Genres';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        tableName: 'genres',
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = (models) => {
        Genre.hasMany(models.Artist, {
            as: "artists",
            foreignKey: "genre_id"
        });
    };

    return Genre
}