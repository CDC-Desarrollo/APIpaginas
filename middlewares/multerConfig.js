const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  UPLOAD_BASE,
  DEFAULT_UPLOAD_FOLDER,
  SUPPORTED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} = require('../config/constants');

function createMulterMiddleware(modulo = 'controldecarga', tipo = 'images') {
  const moduloDirs = UPLOAD_BASE[modulo];
  if (!moduloDirs) throw new Error(`Módulo "${modulo}" no está definido en constants.js`);

  const baseDir = moduloDirs[tipo];
  if (!baseDir) throw new Error(`Tipo "${tipo}" no está definido para el módulo "${modulo}"`);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = req.body.folder || DEFAULT_UPLOAD_FOLDER;
      const uploadPath = path.join(baseDir, folder);
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const customName = req.body.filename || `file_${Date.now()}`;
      const ext = path.extname(file.originalname);
      cb(null, `${customName}${ext}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (SUPPORTED_IMAGE_TYPES.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Tipo de archivo no soportado'));
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: MAX_IMAGE_SIZE },
  });
}

module.exports = { createMulterMiddleware };