const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema(
    {
        customer_email: {
            type: String,
            required: true
        },
        customer_username: {
            type: String,
        },
        customer_password: {
            type: String,
            required: true
        },
        customer_firstName: {
            type: String
        },
        customer_lastName: {
            type: String,
            required: true
        },
        customer_birthday: {
            type: Date
        },
        customer_nationality: {
            type: String
        },
        customer_gender: {
            type: String,
            enum: ['male', 'female', 'other']
        },
        customer_avatar: {
            type: String,
            default: '/img/customer/customer-default-avatar.png',
        },
        customer_background: {
            type: String,
            default: '/img/customer/customer-default-background.jpg',
        },
        customer_address: {
            street: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            postal_code: {
                type: String,
            },
            country: {
                type: String,
            }
        },
        customer_phoneNo: {
            type: String
        },
        customer_role: {
            type: String,
            enum: ['admin', 'user', 'guest', 'supplier'],
            default: 'user'
        },
        customer_verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Customer', CustomerSchema)