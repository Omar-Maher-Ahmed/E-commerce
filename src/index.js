import express from 'express';
import "./src/bootstrap.js";
const app = express();
const port = 5000;
bootstrap(app);


app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});