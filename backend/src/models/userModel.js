import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseApp.js';

const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    roleid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false, // Un usuario debe tener un rol
        references: {
            model: 'tab_role', // nombre de la tabla
            key: 'id', // Columna en la tabla 'tab_role' que se referencia
        },        
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    areaid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false, // Un usuario debe tener area
        references: {
            model: 'tab_area', // nombre de la tabla
            key: 'id', // Columna en la tabla 'tab_area' que se referencia
        },        
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,        
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,        
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    suspended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    timesuspended: {
        type: DataTypes.DATE,
        allowNull: true,
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
        allowNull: true,
    },
}, {
    tableName: 'tab_user', // Especifica el nombre exacto de la tabla 
    timestamps: true,       // Maneja automáticamente createdAt y updatedAt
});

export default userModel;