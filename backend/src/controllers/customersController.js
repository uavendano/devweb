import customersModel from '../models/customersModel.js';
import { logInfo, logError, logWarn } from '../utils/logger.js';

export const getAllCustomer  = async (req, res) => {
    try {
        // Consulta para obtener todos los clientes
        const customer = await customersModel.findAll();
        // Devolver la lista de clientes
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error al obtener todos los registros de los clientes:', error);
        logError('Error al obtener todos los registros de los clientes:', error);
        res.status(500).json({ message: 'Error al obtener todos los registros de los clientes:', error: error.message });
    }
};