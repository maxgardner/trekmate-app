module.exports = function(sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", { 
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            longitude: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
             classMethods: {
                 associate: function(models) {
                    Destination.belongsTo(models.Trip,
                    {
                        onDelete: "cascade",
                        foreignKey: {
                            allowNull: false
                            }
                        });
                    }
                 }
             });
             return Destination;
};
