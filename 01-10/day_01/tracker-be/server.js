const express = require("express");
const app = express();
const PORT = 9000;
require("./db/db");

// -- controllers --
const projectsController = require("./controllers/projects");

// -- cors --

// -- middleware --
app.use(express.json());
app.use("/projects", projectsController);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
