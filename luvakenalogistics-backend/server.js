
const express = require('express');  
const cors = require('cors');  
const { Pool } = require('pg');  

const app = express();  
const port = 3000;  

app.use(cors());  
app.use(express.json());  

// Configura la conexión a PostgreSQL  
const pool = new Pool({  
  user: 'tu_usuario', // Reemplaza con tu usuario de PostgreSQL  
  host: 'localhost',  
  database: 'luvakenalogistics',  
  password: 'tu_contraseña', // Reemplaza con tu contraseña  
  port: 5432,  
});  

// Ruta para obtener datos de ejemplo  
app.get('/api/data', async (req, res) => {  
  try {  
    const resultado = await pool.query('SELECT * FROM tu_tabla');  
    res.json(resultado.rows);  
  } catch (error) {  
    console.error(error);  
    res.status(500).send('Error al consultar la base de datos');  
  }  
});  

app.listen(port, () => {  
  console.log(`Servidor corriendo en http://localhost:${port}`);  
});