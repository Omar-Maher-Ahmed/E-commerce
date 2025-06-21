import dotenv from "dotenv";

dotenv.config();

import express from 'express';
import bootstrap from './src/modules/bootstrab.js';

const app = express();
const port = 5000;
bootstrap(app);


app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});