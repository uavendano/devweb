import express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import { UserRegisterValidator, EditUserValidator, AreaRegisterValidator } from '../middleware/validators.js';
import { register, login, logout, checkAuth } from '../controllers/authController.js';
import { forgotPassword, resetPassword  } from '../controllers/forgotPasswordController.js';
import { getAllCustomer } from '../controllers/customersController.js';
import { createUser, getAllUser, getUserById, updateUser, suspendUser, softDeleteUser } from '../controllers/userController.js';
import { getAdmins, getEmployee, addAdmin, removeAdmin } from '../controllers/assignAdminsController.js';
import { createArea, getAllArea, getAreaById, updateArea, deleteArea } from '../controllers/areaController.js';
import { sendContactEmail } from '../controllers/contactController.js';
import { getAllAreaActive, getUserWithoutArea, assignAreaToUsers, getUsersWithArea, unassignAreaFromUsers } from '../controllers/assignAreaController.js';
import { getDates } from '../controllers/calendarioTiendaController.js';

const router = express.Router();

// *** Rutas públicas *** //
// 1. Rutas base para pruebas
router.get('/', (req, res) => { res.send('API is working!!!'); });
router.get('/helloworld', (req, res) => { res.send('Hello World!!!'); });
// 1.2. Ver el estatus de la sesion
router.get('/checkauth', checkAuth);
// 1.3. Rutas auth
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// *** Rutas protegidas *** //
// Clientes
router.use('/customers', isAuthenticated); // Protege todo lo que empiece con /customers
router.get('/customers', getAllCustomer);
// Usuarios
router.use('/user', isAuthenticated); // Protege todo lo que empiece con /user
router.post('/user', UserRegisterValidator, createUser);
router.get('/user', getAllUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', EditUserValidator, updateUser);
router.put('/user/suspend/:id', suspendUser);
router.put('/user/delete/:id', softDeleteUser);
// Asignar rol administrador
router.use('/admins', isAuthenticated); // Protege todo lo que empiece con /admins
router.get('/admins', getAdmins);
router.post('/admins/addadmin', addAdmin);
router.post('/admins/remove', removeAdmin);
router.get('/employee', isAuthenticated, getEmployee);
// Area
router.use('/area', isAuthenticated); // Protege todo lo que empiece con /area
router.post('/area', AreaRegisterValidator, createArea);
router.get('/area', getAllArea);
router.get('/area/:id', getAreaById);
router.put('/area/:id', AreaRegisterValidator, updateArea);
router.put('/area/delete/:id', deleteArea);
// Asignar area a usuarios
router.get('/list-area-active', isAuthenticated, getAllAreaActive);
router.get('/users-without-area', isAuthenticated, getUserWithoutArea);
router.post('/assign-area-to-users', isAuthenticated, assignAreaToUsers);
router.get('/users-with-area', isAuthenticated, getUsersWithArea);
router.post('/unassign-area-to-users', isAuthenticated, unassignAreaFromUsers);
// Formularios
router.post('/contact', sendContactEmail);
// Calendario tienda
router.get('/courses-dates', getDates);

export default router;