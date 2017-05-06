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
         status: { 
             type: DataTypes.STRING, 
             allowNull: true 
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