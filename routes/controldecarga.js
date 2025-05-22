const express = require('express');
const router = express.Router();

const mapa = require('../controllers/controldecarga/MapaControlador');
const guia=require('../controllers/controldecarga/guiaControlador');
const correo=require('../controllers/correo');
const imagenes=require('../controllers/controldecarga/imagenes')
const { createMulterMiddleware } = require('../middlewares/multerConfig');


router.get('/guia',guia.getGuiaHistorial);

router.get('/mapa/activos', mapa.obtenerEstadosActivos);

router.get('/mapa/estado', mapa.obtenerEstados);

router.post('/mapa/actualizar', mapa.actualizarEstados);

router.post('/enviar/correo', correo.EnviarCorreo);

const multerMiddleware = createMulterMiddleware('controldecarga', 'images');


router.get('/imagenes', imagenes.getImagenes);
router.post('/imagenes', multerMiddleware.single('file'), imagenes.postImagenes);

module.exports = router;