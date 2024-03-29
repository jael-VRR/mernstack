const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const { mongoose } = require('./database');
//Settings
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

//Static files
app.use(express.static(path.join(__dirname, "public")));
