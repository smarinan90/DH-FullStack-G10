module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        birthday: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        }
    };

    const config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);
    return User
}