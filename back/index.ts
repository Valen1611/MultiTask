import express, { Request, Response } from  'express'
import pool from './db';

const app = express()
const port = 3001
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! desde el back-end')
})


app.get('/categorias', async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query("SELECT * FROM categorias");
        res.send(rows);
      } catch (err: any) {
        console.log("holaaa");
        console.error(err.message);
        res.status(500).send('Server error aaa');
      }
})

app.get('/tareas', async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tareas');
        res.json(rows);
      } catch (err: any) {
        console.error(err.message);
        res.status(500).send('Server error');
      }

})


app.post('/tareas', async (req: Request, res: Response) => {
    try {
        const { nombre, categoria } = req.body;

        console.log("nombre", nombre, "categoria", categoria);
        
        if (!nombre || !categoria) {
          return res.status(400).json({ error: 'Faltan parámetros necesarios' });
        }
        
        const newTarea = await pool.query(
          'INSERT INTO tareas (nombretarea, categoria) VALUES($1, $2) RETURNING *',
          [nombre, categoria]
        );
        res.json(newTarea.rows[0]);
      } catch (err: any) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
})

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})