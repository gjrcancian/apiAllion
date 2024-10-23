import express from 'express';
import connectDB from './config/db';
import router from './routes';
import cors from 'cors';
const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware para processar JSON
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3001', // Substitua pelo domínio da sua aplicação frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permitir envio de cookies
};

app.use(cors(corsOptions));
// Middleware para processar dados URL-encoded
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
  res.send('API está rodando...');
});

app.post('/api/data', (req, res) => {
    const data = req.body;

    // Verifica se os dados foram recebidos corretamente
    if (!data) {
        return res.status(400).json({ message: 'Nenhum dado recebido' });
    }

    router(data, res);

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
