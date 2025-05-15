const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Evolution API funcionando en Render');
});

app.post('/send-message', (req, res) => {
  const { number, message } = req.body;
  console.log(`Mensaje para ${number}: ${message}`);
  res.json({ status: 'ok', detail: `Mensaje recibido para ${number}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
