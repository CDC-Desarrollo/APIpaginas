const sendEmail = require('../config/mail');

exports.EnviarCorreo = async (req,res) =>{

    const{to, subject, text}=req.body;
    const cc=req.session.CorreoUsuario;

    sendEmail(to,subject,text,cc)
    .then(() => console.log('Correo enviado correctamente'))
    .catch(error => console.error('Error al enviar el correo:', error));
    res.json({"message":"Correo enviado correctamente","status":"200"})
}