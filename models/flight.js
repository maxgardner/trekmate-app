module.exports = function (sequelize, Datatypes) {
    var Flight = sequelize.define("Flight", {
            flight_number: {
                type: Datatypes.STRING,
                allowNull: false
            },
            status: {
                type: Datatypes.STRING,
                allowNull: true
            },
            arrival_time: {
                type: Datatypes.TIME,
                allowNull: true
            }
        },
        {// Associations

        });
    return Flight;
};