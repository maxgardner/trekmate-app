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
         },
    },
    {
        classMethods: {
            associate: function(models) {
                CarRental.belongsTo(models.Trip,
                {
                    constraints: false,
                    onDelete: "cascade",
                    foreignKey: {
                        allowNull: true
                    }
                });
                CarRental.hasOne(models.Trip, {
                  constraints: false,
                  foreignKey: {
                    allowNull: true
                  }
                });
            }
        }
    });
    return CarRental;
};
