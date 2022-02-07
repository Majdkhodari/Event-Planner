const express = require("express");
const eventRouter = require("./routes/event.route");
const connectDB = require("./Model/databaste");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use("/events/", eventRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on ${PORT}`);
  connectDB();
});
