import express from "express";
import Connection from "./Database/Db.js";

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Your Server is running successfully on PORT ${PORT}`)
);
