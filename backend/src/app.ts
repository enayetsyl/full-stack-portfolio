/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();


//parsers
app.use(express.json());


// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://e-rahman-portfolio.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin || "")) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    // credentials: true, // Allow credentials (cookies, auth headers)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(cookieParser());



// application routes
app.use('/api/v1', router); // /api/v1 will prefix all the route. This is the connection with the index.ts file inside the routes folder. 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from boiler plate code');
});

app.use(globalErrorHandler);  // This is connected with the globalErrorhandler.ts file at the middleware folder.

//Not Found
app.use(notFound);  // This is connected with the notFound.ts file at the middleware folder.

export default app;