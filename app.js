const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const CDCRouter = require('./routes/controldecarga');
const igRouter=require('./routes/interfazGrafica')

app.use(express.json()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));
// Rutas
app.use('/api/cdc',CDCRouter)
app.use('/')
// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});