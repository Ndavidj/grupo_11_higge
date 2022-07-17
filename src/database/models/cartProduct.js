module.exports = (sequelize, dataTypes) => {
    let alias = 'cartProduct';
    let cols = {
        idRegister: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idCart: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idProduct: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        dateRegister: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }

    let config = {
        tableName: 'cartsproducts',
        timestamps: false
    }
    
    const cartProduct = sequelize.define(alias, cols, config);

    return cartProduct;
}