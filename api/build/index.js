//ECAPACITAÇÃO - EVENTOS
//Author: João Felipi Cardoso
import express from "express";
import { testConnection } from "./db/db.js";
const app = express();
const port = process.env.PORT || 8087;
app.get("/", (req, res) => {
    testConnection();
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
//# sourceMappingURL=index.js.map