module.exports = function(sequelize, DataTypes) { 
    var Activity = sequelize.define("Activity", { 
         id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
         }, 
         activity_name: { 
             type: DataTypes.STRING,    
             allowNull: false, 
         },
         description: { 
             type: DataTypes.STRING, 
             allowNull: false
         }, 
         time_of_event: { 
             type: DataTypes.TIME, 
             allowNull: false, 
         }
    },
    {
        classMethods: { 
                    associate: function(models) { 
                        Activity.belongsTo(models.Trip, 
                        {
                            onDelete: "cascade", 
                            foreignKey: { 
                                allowNull: false
                                } 
                            }); 
                        }
                    }
                });
            
                return Activity;
    };