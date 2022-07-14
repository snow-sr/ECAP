//ECAPACITAÇÃO - EVENTOS
//Author: João Felipi Cardoso

import express from "express";
const app: express.Application = express();
const port = process.env.PORT || 8087;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
