module.exports = function(sequelize, DataTypes) { 
    var Hotel = sequelize.define("Hotels", { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
         }, 
         hotel_name: { 
             type: Datatypes.STRING, 
             allowNull: false, 
             validate: {len: [1]}
         },
         address: { 
             type: Datatypes.STRING, 
             allowNull: true, 
         }, 
         checkIn_Time: { 
             type: Datatypes.TIME, 
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