const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: process.env.T_Host,
  port: process.env.T_Port ,
  secure:true,
  auth: {
    user: process.env.T_User,
    pass: process.env.T_Password
  }
});

const sendEmail = async (to, subject, text,cc) => {
try { 
        const info = await transporter.sendMail({
            from: 'notificaciones@jagilogistics.com', // Remitente
            to, // Destinatario
            cc,
            subject, // Asunto del correo
            text // Contenido en texto plano
            // html: '<b>Mensaje en HTML</b>' // Opcional, contenido en HTML
        });
  //console.log('Correo enviado: %s', info.messageId);
    } catch (error) {
    console.error('Error al enviar correo:', error);
    }
};

module.exports=sendEmail;