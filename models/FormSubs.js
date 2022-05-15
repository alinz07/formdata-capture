const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class FormSubs extends Model {
    // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
FormSubs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "formsubs",
    }
);

module.exports = FormSubs;
