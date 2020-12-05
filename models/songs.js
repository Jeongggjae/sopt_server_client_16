module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Song',
        {
            title: {
                type: DataTypes.STRING(30),
            },
            subtitle: {
                type: DataTypes.STRING(30),
            },
            songimageUri: {
                type: DataTypes.STRING(200),
            },
            most: {
                type: DataTypes.INTEGER,
            },
            twentys: {
                type: DataTypes.INTEGER,
            },
            foreign: {
                type: DataTypes.INTEGER,
            },
            now: {
                type: DataTypes.INTEGER,
            },

        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
};