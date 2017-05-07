module.exports = function(sequelize, DataTypes) { 
    var Flight = sequelize.define("Flights", { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
         }, 
         flight_number: { 
             type: DataTypes.INTEGER, 
             allowNull: false
         }, 
         city_departure: { 
             type: DataTypes.INTEGER, 
             allowNull: false
         },
         arrival_time: { 
             type: DataTypes.TIME,
             allowNull: true
            }
         },
         { 
             classMethods: { 
                 associate: function(models) { 
                    Flight.belongsTo(models.Trip, 
                    {
                        onDelete: "cascade", 
                        foreignKey: { 
                            allowNull: false
                            } 
                        }); 
                    }
                 }
             }); 
        
    return Flight;
};