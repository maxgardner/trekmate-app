module.exports = function(sequelize, DataTypes) { 
    var Trip = sequelize.define("Trip", { 
         uuid: {
             type: DataTypes.UUID,
             defaultValue: DataTypes.UUIDV1,
             primaryKey: true
         },
         Departing_to: {
             type: DataTypes.STRING, 
             allowNull: false,
             validate: { len: [1]} 
         },
         Departure_Date: {
             type: DataTypes.INTEGER, 
             allowNull: false, 
         }, 
         Return_Date: { 
             type: DataTypes.INTEGER, 
             allowNull: false, 
         }
    },
    {
        classMethods: { 
            associate: function(models) { 
                Trip.hasMany(models.Flight);
            }, 
            associate: function(models) { 
                Trip.hasMany(models.Hotel);
            }, 
            associate: function(models) { 
                Trip.hasMany(models.Destination);
            }, 
            assciate: function(models) { 
                Trip.hasMany(models.CarRental);
            },
            associate: function(models) { 
                Trip.hasMany(models.Activity);
            },
            
              associate: function(models) {
                  Trip.belongsTo(models.User);
              }
        }
    });
     
          
    return Trip; 
};