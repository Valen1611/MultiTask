import express, { Request, Response } from  'express'
const app = express()
const port = 3001
const cors = require('cors');

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! desde el back-end')
})

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})