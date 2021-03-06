const express = require("express");
const app = express();
require("./db/db");
const PORT = process.env.PORT || 9000;
require("dotenv").config();
const cors = require("cors");

// -- controllers --
const projectsController = require("./controllers/projects");

// -- cors --
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
};

// -- middleware --
app.use(express.json());
app.use(cors(corsOptions));

app.use("/projects", projectsController);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
