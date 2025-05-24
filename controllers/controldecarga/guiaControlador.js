exports.getGuiaHistorial=async (req,res) => {

  const guia = req.query.Guia;

  let bodyContent = new FormData();
  bodyContent.append("username", "usrconsultaguias");
  bodyContent.append("password", "USAmx2022*@pro");
  bodyContent.append("guia", guia);

  try {
    let response = await fetch("https://controldecarga.ecusmart.net/webservice/ws_status_guia.php", {
      method: "POST",
      body: bodyContent,
      redirect: "follow",
      headers: {
        "Cookie": "PHPSESSID=b9jk77p1sp7kqg63oepks046d7"
      }
    });

    let data = await response.json();

    // Filtrar donde status NO sea "consolidado" (sin importar mayúsculas/minúsculas)
    let datosFiltrados = data
      .filter(g => g.status.toLowerCase() !== "consolidado")
      .map(g => ({
        status: g.status,
        fecha: g.fecha,
        comentarios:g.comentarios
      }));

    res.json(datosFiltrados);

  } catch (error) {
    console.error("Error al consultar la guía:", error);
    res.status(500).json({ error: "Error al obtener datos de la guía" });
  }
    
}