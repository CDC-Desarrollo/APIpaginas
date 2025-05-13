const express = require('express');
const router = express.Router();

const mapa = require('../controllers/MapaControlador');
const guia=require('../controllers/guiaControlador');


router.get('/guia',guia.getGuiaHistorial);

router.get('/mapa/activos', mapa.obtenerEstadosActivos);

router.get('/mapa/estado', mapa.obtenerEstados);

router.post('/mapa/actualizar',mapa.actualizarEstados);



module.exports = router;