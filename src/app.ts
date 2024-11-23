import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { bicycleRouter } from './app/modules/bicycle/bicycle.router'
const app:Application = express()
// const port = 3000

// parser
app.use(express.json())
app.use(cors())


// application routes

app.use("/api",bicycleRouter)



const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);


// console.log(process.cwd());
export default app;