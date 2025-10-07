import { sequelize } from '../config/databaseApp.js';
import userModel from './userModel.js';
import roleModel from './roleModel.js';
import areaModel from './areaModel.js';

// Relacion usuarios-roles
roleModel.hasMany(userModel, { foreignKey: 'roleid', as: 'roleUsers' });    // Un rol tiene muchos usuarios
userModel.belongsTo(roleModel, { foreignKey: 'roleid', as: 'userRole' });   // Un usuario pertenece a un rol
// Relacion usuarios-areas
areaModel.hasMany(userModel, { foreignKey: 'areaid', as: 'areaUsers' });    // Un área tiene muchos usuarios
userModel.belongsTo(areaModel, { foreignKey: 'areaid', as: 'userArea' });   // Un usuario pertenece a un área

// Exportar los modelos y la instancia de sequelize
export {
    userModel,
    roleModel,
    areaModel,
    sequelize
};