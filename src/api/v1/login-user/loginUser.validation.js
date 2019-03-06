const Joi = require('joi');

exports.loginUser = {
    id: Joi.number().integer().required(),
    username: Joi.string().required()
};
