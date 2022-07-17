module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        idProduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
        idSize: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        idCategory: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

      Product.associate = function (models){
        Product.belongsToMany (models.Cart, {
            as: "products",
            through: "cartsProducts",
            foreingKey: "idProduct",
            otherKey: "idCart",
            timestamps: false
        })

        Product.belongsTo (models.Size, {
            as: "size",
            foreingKey: "idSize"
        })

        Product.belongsTo (models.Category, {
            as: "category",
            foreingKey: "idCategory"
        })
    }  


    return Product;
}