import express from 'express';
import connectDB from './db';  // Caminho onde está o arquivo db.ts

const app = express();

// Conectar ao MongoDB
connectDB();

app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API está rodando...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
