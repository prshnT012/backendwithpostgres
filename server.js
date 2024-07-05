import express from "express";
import router from "./src/students/routes.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello this is me prashant");
});

app.use("/api/v1/students", router);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
