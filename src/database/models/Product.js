module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
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
        categoryId: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    //La implementacion de las asociaciones esta creando columnas fantasma!!!
    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: "category",
            foreingKey: "categoryId"
        })
    }


    return Product;
}