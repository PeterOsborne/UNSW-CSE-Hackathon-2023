import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import {
  registerUser,
  listAllUsers,
  getUserData
} from './users';

const port = "4000";
const url = "http://localhost";


const PORT: number = parseInt(process.env.PORT || port);
const HOST: string = process.env.IP || 'localhost';

const app = express();

// Use middleware that allows for access from other domains (needed for frontend to connect)
app.use(cors());
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware to log (print to terminal) incoming HTTP requests (OPTIONAL)
app.use(morgan('dev'));

// Root URL
app.get('/', (req: Request, res: Response) => {
  console.log('Print to terminal: someone accessed our root url!');
  res.json(
    {
      message: "Root directory",
    }
  );
});

app.post('/user/create', (req: Request, res: Response) => {
  
  const { name, email, password } = req.body;
  const response = registerUser(name, email, password);

  if ('error' in response) {
    return res.status(400).json(response);
  }
  res.json(response);
});

app.get('/user/list', (req: Request, res: Response) => {
  const response = listAllUsers();
  res.json(response);
});

app.get('/user/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = getUserData(id);

  if ('error' in response) {
    return res.status(400).json(response);
  }
  res.json(response);
});

/**
 * Start server
 */
const server = app.listen(PORT, HOST, () => {
  console.log(`Express Server started and awaiting requests at the URL: '${url}:${PORT}'`);
});

/**
 * Handle Ctrl+C gracefully
 */
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Shutting down server gracefully.');
    process.exit();
  });
});
