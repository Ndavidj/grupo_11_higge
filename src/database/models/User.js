module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idUser: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        dateBirthday: {
            type: dataTypes.DATE,
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: true
        },
        idRole: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "role",
            foreingKey: "idRole"
        })

        User.hasMany(models.Cart, {
            as: "userCart",
            foreingKey: "idUser"
        })
    }

    return User;
}