module.exports = (sequelize, datatypes) => {
    let alias = "Genre";

    let cols = {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : datatypes.STRING(100),
            allowNull : false
        },
       
        ranking: {
            type : datatypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique: true
        },
        active : {
            type : datatypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false
        }
 
    };

    let config = {
        tableName : 'genres', //no es necesario si coincide con el nombre del modelo
        timestamps : true, // no es necesario si la tabla tiene. si es importante aclarar si no lo tiene
        underscored: true //significa que los timestamps estan escritos con _ guion bajo
    };

    const Genre = sequelize.define(alias,cols, config);

    return Genre
}
