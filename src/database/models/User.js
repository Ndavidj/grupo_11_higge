module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    
    let cols = {
        id: {
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
        dateBirthday: {
            type: dataTypes.DATE,
            allowNull: true
        },
        address: {
            type: dataTypes.STRING,
            allowNull: true
        },
        interest: {
            type: dataTypes.STRING,
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        roleId: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: 'roleId'
        })
    }

    return User;
}