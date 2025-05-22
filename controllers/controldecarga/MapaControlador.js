const controladorMapa = require('../../services/controldecarga/dbServiceEstados');

exports.obtenerEstadosActivos = async (req, res) => {
    try {
      const resultados = await controladorMapa.getEstadosActivos();
  
      if (resultados.length > 0) {
        return res.status(200).json({ status: '200', results: resultados });
      } else {
        return res.status(404).json({ error: 'No se encontraron estados activos' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
    }
    
  };

  exports.obtenerEstados=async (req,res) => {

    let id =req.query.ID_Estado;
    let resultados;

    console.log(id)
    try{
        if(typeof(req.query.ID_Estado)=='undefined'){
             resultados = await controladorMapa.getEstados();
        }
        else{
             resultados = await controladorMapa.getEstado(id)
        }
        if (resultados.length > 0) {
            return res.status(200).json({ status: '200', results: resultados });
          } else {
            return res.status(404).json({ error: 'No se encontraron estados activos' });
          }
    }
    catch(error){
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
  }


  exports.actualizarEstados=async (req,res) => {

    const {activo, informacion,ID_Estado}=req.body;

    try{
    
        resultados = await controladorMapa.postEstado(activo, informacion,ID_Estado)
        console.log(resultados.affectedRows);
        
        if (resultados.affectedRows >= 1) {
            return res.status(200).json({ status: '200', results: resultados });
          } else {
            return res.status(404).json({ error: 'No se realizaron insercciones' });
          }
    }
    catch(error){
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
  }