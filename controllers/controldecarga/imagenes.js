const fs = require('fs');
const path = require('path');
const { UPLOAD_BASE } = require('../../config/constants');

const getImagenes = async (req, res) => {
  const carpeta = req.query.carpeta || 'default';

  if (!/^[\w-]+$/.test(carpeta)) {
    return res.status(400).json({ error: 'Nombre de carpeta inválido' });
  }

  const carpetaPath = path.join(UPLOAD_BASE.controldecarga.images, carpeta);
  console.log('📁 Ruta absoluta buscada:', carpetaPath);

  fs.readdir(carpetaPath, (err, files) => {
    if (err) {
      console.error('❌ Error leyendo carpeta:', err);
      return res.status(500).json({ error: 'Error al obtener las imágenes' });
    }

    console.log('📄 Archivos encontrados:', files);
    const imageUrls = files.map(file => `/controldecarga/${carpeta}/${file}`);
    res.json(imageUrls);
  });
};

const postImagenes = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });

  res.json({
    message: 'Imagen subida exitosamente',
    path: `/controldecarga/${req.body.folder || 'default'}/${req.file.filename}`,
  });
};

module.exports = {
  postImagenes,
  getImagenes,
};