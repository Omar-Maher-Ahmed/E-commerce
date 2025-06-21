import dotenv from "dotenv";

dotenv.config();

import express from 'express';
import bootstrap from './src/modules/bootstrab.js';
import cors from "cors";

const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

const port = 5000;

bootstrap(app);


app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});