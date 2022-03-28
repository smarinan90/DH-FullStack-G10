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

    const User = sequelize.define(alias, cols, config);
    return User
}