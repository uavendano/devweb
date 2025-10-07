import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseApp.js';

const areaModel = sequelize.define('Area',{    
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    shortname: {
        type: DataTypes.STRING(30),
        allowNull: false, 
        unique: true,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    timedeleted: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
},{
    tableName: 'tab_area',     // Especifica el nombre exacto de la tabla
    timestamps: true,          // Agrega createdAt y updatedAt automáticamente
});

export default areaModel;