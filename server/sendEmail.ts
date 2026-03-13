import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Configurar transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Verificar conexión al iniciar
transporter.verify((error, success) => {
    if (error) {
        console.error('Error en configuración SMTP:', error);
    } else {
        console.log('Servidor SMTP listo para enviar correos');
    }
});

// Endpoint de contacto
app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            replyTo: email,
            to: 'contacto@alcanzo.com',
            subject: `[Contacto Web] ${subject}`,
            text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
        });

        res.status(200).json({ ok: true, message: 'Correo enviado exitosamente' });
    } catch (err) {
        console.error('Error al enviar correo:', err);
        res.status(500).json({ error: 'No se pudo enviar el correo' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

export default app;