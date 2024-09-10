const express = require('express');  
const cors = require('cors');  
const { Pool } = require('pg');  

const app = express();  
const port = 3000;  

app.use(cors());  
app.use(express.json());  

// Configuración de la conexión a la base de datos PostgreSQL  
const pool = new Pool({  
  user: 'tu_usuario',  
  host: 'localhost',  
  database: 'luvakenalogistics',  
  password: 'tu_contraseña',  
  port: 5432,  
});  

// Endpoint para obtener clientes  
app.get('/api/clients', async (req, res) => {  
  try {  
    const result = await pool.query('SELECT * FROM clientes');  
    res.json(result.rows);  
  } catch (error) {  
    res.status(500).json({ error: 'Error al obtener clientes' });  
  }  
});  

// Endpoint para obtener servicios  
app.get('/api/services', async (req, res) => {  
  try {  
    const result = await pool.query('SELECT * FROM servicios');  
    res.json(result.rows);  
  } catch (error) {  
    res.status(500).json({ error: 'Error al obtener servicios' });  
  }  
});  

app.listen(port, () => {  
  console.log(`Servidor corriendo en http://localhost:${port}`);  
});