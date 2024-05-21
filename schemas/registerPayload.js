const { roles } = require('../config');

module.exports = {
    type: 'object',
    properties: {
        image: {
            type: 'string',
        },
        username: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        paymentOption: {
            type: 'string'
        },
        role: {
            type: 'string',
            enum: Object.values(roles)
        }
    },
    required: [
        'username',
        'password',
        'firstName',
        'lastName',
        'address',
        'paymentOption'
    ],
    additionalProperties: false
};