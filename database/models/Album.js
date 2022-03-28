module.exports = (sequelize, dataTypes) => {
    const alias = 'Albums';

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
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER
        },
        cover_image: {
            type: dataTypes.STRING,
            defaultValue: true
        }
    };

    const config = {
        tableName: 'albums',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);
    return User
}