module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
         uuid: {
             type: DataTypes.UUID,
             defaultValue: DataTypes.UUIDV1,
             primaryKey: true
         },
         city: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: { len: [1]}
         },
         state: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: { len: [1]}
         },
         departure_date: {
             type: DataTypes.DATE,
             allowNull: false,
         },
         return_date: {
             type: DataTypes.DATE,
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
            associate: function(models) {
                Trip.hasMany(models.Car_Rental);
            },
            associate: function(models) {
                Trip.hasMany(models.Activity);
            },
            associate: function(models) {
                Trip.belongsTo(models.User, {
                  foreignKey: {
                      allowNull: false
                  }
                });
            }
        }
    });


    return Trip;
};
