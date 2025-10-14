import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseApp.js';

const customersModel = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,        
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    tel: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    client: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    privacy: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    campaign: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'tab_customers',     // Especifica el nombre exacto de la tabla 
    timestamps: false,              // si la tabla no tiene createdAt/updatedAt
});    

export default customersModel;