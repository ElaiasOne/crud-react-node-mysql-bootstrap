import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import employeesRouter from "./routes/employees.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/employees", employeesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Corriendo en el puerto ${process.env.PORT}`);
});
