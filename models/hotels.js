module.exports = function(sequelize, DataTypes) { 
    var Hotel = sequelize.define("Hotels", { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
         }, 
         hotel_name: { 
             type: DataTypes.STRING, 
             allowNull: false, 
             validate: {len: [1]}
         },
         address: { 
             type: DataTypes.STRING, 
             allowNull: true, 
         }, 
         checkIn_Time: { 
             type: DataTypes.TIME, 
             allowNull: true
         }
    },  
        { 
             classMethods: { 
                 associate: function(models) { 
                    Hotel.belongsTo(models.Trip, 
                    {
                        onDelete: "cascade", 
                        foreignKey: { 
                            allowNull: false
                            } 
                        }); 
                    }
                 }
             });
        
         return Hotel;
};