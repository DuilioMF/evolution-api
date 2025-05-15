const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Evolution API funcionando en Render');
});

app.post('/send-message', (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).json({ error: 'Faltan parámetros: number o message' });
  }

  // Acá iría el envío real por WhatsApp
  console.log(`Enviar mensaje a ${number}: ${message}`);

  return res.json({ status: 'Mensaje simulado enviado correctamente' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
