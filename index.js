import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./configs/databaseConnetion/db.js";
dotenv.config({
  path: "./configs/.env",
});

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error in running server", error);
  } else {
    connectToMongoDb();
    console.log(`server is running at http://localhost:${PORT}`);
  }
});
