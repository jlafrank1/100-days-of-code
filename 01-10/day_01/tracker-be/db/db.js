const mongoose = require("mongoose");

// connect to the database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/" + `100daysofcode`;

// connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// error / disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});
