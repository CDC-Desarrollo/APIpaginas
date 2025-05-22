const fs = require('fs');
const path = require('path');
const { IMAGES_DIR } = require('../config/constants'); // Asegúrate de definir esto

const getImagenes = (req, res) => {
  const carpeta = req.query.carpeta;
  const carpetas = path.join(IMAGES_DIR, carpeta);

  fs.readdir(carpetas, (err, files) => {
    if (err) return res.status(500).json({ error: 'Error al obtener las imágenes' });

    const imageUrls = files.map(file => `/Images/${carpeta}/${file}`);
    res.json(imageUrls);
  });
};

const uploadResponse = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ningún archivo' });
  }

  res.json({
    message: 'Archivo subido exitosamente',
    filename: req.file.filename,
    path: `/uploads/${req.body.folder || 'default'}/${req.file.filename}`,
  });
};

module.exports = {
  getImages,
  uploadResponse,
};