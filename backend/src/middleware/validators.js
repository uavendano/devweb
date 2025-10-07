import { check } from 'express-validator';

export const UserRegisterValidator = [
    check('name')
        .not().isEmpty().withMessage('[name] is required')
        .matches(/\S/).withMessage('[name] cannot contain only spaces'),
    check('lastname')
        .not().isEmpty().withMessage('[lastname] is required')
        .matches(/\S/).withMessage('[lastname] cannot contain only spaces'),    
    check('username')
        .not().isEmpty().withMessage('[username] is required')
        .matches(/\S/).withMessage('[username] cannot contain only spaces'),
    check('email')
        .isEmail().withMessage('Valid [email] is required')
        .matches(/\S/).withMessage('[email] cannot contain only spaces'),
    check('password')
        .not().isEmpty().withMessage('[password] is required')
        .isLength({ min: 7 }).withMessage('[password] must be at least 7 characters long')
        .matches(/\S/).withMessage('[password] cannot contain only spaces')
];

export const EditUserValidator = [    
    check('name')
        .not().isEmpty().withMessage('[name] is required')
        .matches(/\S/).withMessage('[name] cannot contain only spaces'),
    check('lastname')
        .not().isEmpty().withMessage('[lastname] is required')
        .matches(/\S/).withMessage('[lastname] cannot contain only spaces'),    
    check('username')
        .not().isEmpty().withMessage('[username] is required')
        .matches(/\S/).withMessage('[username] cannot contain only spaces'),
    check('email')
        .isEmail().withMessage('Valid [email] is required')
        .matches(/\S/).withMessage('[email] cannot contain only spaces'),
    check('password')
        .optional({ checkFalsy: true })
        .isLength({ min: 7 })
        .withMessage('[password] must be at least 7 characters long')
];

export const AreaRegisterValidator = [
    check('name')
        .not().isEmpty().withMessage('[name] is required')
        .matches(/\S/).withMessage('[name] cannot contain only spaces'),
    check('shortname')
        .not().isEmpty().withMessage('[shortname] is required')
        .matches(/\S/).withMessage('[shortname] cannot contain only spaces')
];