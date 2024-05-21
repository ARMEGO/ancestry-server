const { DataTypes } = require("sequelize");
const { roles } = require("../config");

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentOption: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: roles.ADMIN
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
};

module.exports = {
    initialise: (sequelize) => {
        this.model = sequelize.define("user", UserModel);
    },

    createUser: (user) => {
        return this.model.create(user);
    },

    findUser: (query) => {
        return this.model.findOne({
            where: query,
        });
    },

    updateUser: (query, updatedValue) => {
        return this.model.update(updatedValue, {
            where: query,
        });
    },

    findAllUsers: (query) => {
        return this.model.findAll({
            where: query
        });
    },
};