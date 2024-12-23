import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"
import morgan from "morgan";
import connectToMongoDb from "./configs/databaseConnetion/db.js";
dotenv.config({
  path: "./configs/.env",
});

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

// Api Routes
// app.use("/api", allRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error in running server", error);
  } else {
    connectToMongoDb();
    console.log(`server is running at http://localhost:${PORT}`);
  }
});





// if i have to use images then code for index.js

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// app.use(
//   "/assets",
//   express.static(path.join(__dirname, "public/uploads/assets"))
// );