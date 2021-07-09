const { Router } = require('express');
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGET);

router.put('/:id', usuariosPUT)

router.post('/', usuariosPOST)

router.delete('/:id', usuariosDELETE)

module.exports = router;