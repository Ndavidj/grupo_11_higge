module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        idRole: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'roles',
        timestamps: false
    }
    const Role = sequelize.define(alias, cols, config);

    Role.associate = function (models) {
        Role.belongsTo (models.User, {
            as: "user",
            foreingKey: "idUser"
        })
    }
    return Role; 
}