const { response, request } = require('express');

const usuariosGET = (req, res = response) => {

    const { nombre = 'No name', edad } = req.query;

    res.json({
        message: 'GET API - usuariosGET',
        nombre,
        edad
    });
};

const usuariosPOST = (req, res = response) => {

    const { body } = req;

    res.json({
        message: 'POST API - usuariosPOST',
        body
    });
};

const usuariosPUT = (req, res = response) => {

    const { id } = req.params;

    res.json({
        message: 'PUT API - usuariosPUT',
        id
    });
};

const usuariosDELETE = (req, res = response) => {
    res.json({
        message: 'DELETE API - usuariosDELETE'
    });
};

module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosDELETE
}