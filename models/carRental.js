module.exports = function(sequelize, DataTypes) { 
    var CarRental = sequelize.define("Car_Rental", { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
         },
         Rental_Comp: { 
             type: DataTypes.STRING, 
             allowNull: false, 
             validate: { len: [1]}
         }
    })
}