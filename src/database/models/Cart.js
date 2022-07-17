module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';

    let cols = {
        idCart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idUser: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        subTotal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: 'carts',
        timestamps: false
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo (models.User, {
            as: "userCart",
            foreingKey: "idUser"
        })

        Cart.belongsToMany (models.cartProduct, {
            as: "cartProduct",
            through: "cartsproducts",
            foreingKey: "idCart",
            otherKey: "idProduct",
            timestamps:false
        })
    }

    
    return Cart;
}